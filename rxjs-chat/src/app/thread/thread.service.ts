import { Injectable } from "@angular/core";
import { Subject,BehaviorSubject,Observable } from "rxjs/Rx";
import { Thread } from "./thread.model";
import { Message } from "../message/message.model";
import { MessageService } from "../message/message.service";
import * as _ from "lodash";

@Injectable()
export class ThreadService{
    threads:Observable<{[key:string]:Thread}>;
    orderedThreads:Observable<Thread[]>;
    currentThread:Subject<Thread>=new BehaviorSubject<Thread>(new Thread());
    currentThreadMessages:Observable<Message[]>;
    constructor(public messageService:MessageService){
        this.threads=messageService.messages.map((messages:Message[])=>{
            const threads:{[key:string]:Thread}={};
            messages.map((message:Message)=>{
                threads[message.thread.id] = threads[message.thread.id]||message.thread;
                const messagesThread:Thread = threads[message.thread.id];
                if(!messagesThread.lastMessage||
                    messagesThread.lastMessage.sentAt<message.sentAt
                ){
                    messagesThread.lastMessage = message;
                }
            });
            return threads;
        });
        this.orderedThreads = this.threads.map((threadGroups:{[key:string]:Thread})=>{
            const threads:Thread[]=_.values(threadGroups);
            return _.sortBy(threads,(t:Thread)=>{
                return t.lastMessage.sentAt;
            }).reverse();
        });
        this.currentThreadMessages = this.currentThread .combineLatest(messageService.messages,
            (currentThread:Thread,messages:Message[])=>{
                if(currentThread&&messages.length>0){
                    return _.chain(messages)
                        .filter((message:Message)=>
                        (message.thread.id === currentThread.id))
                        .map((message:Message)=>{
                            message.isRead = true;
                            return message;
                        })
                        .value();
                }else{
                    return [];
                }
            });
        this.currentThread.subscribe(this.messageService.markThreadAsRead);
    }

    setCurrentThread(newThread:Thread):void{
        this.currentThread.next(newThread);
    }
}

export const threadServiceInjectables:Array<any> = [
    ThreadService
];