import { Component, Inject ,ViewEncapsulation} from '@angular/core';
import { ChatExampleData } from './data/chat-example-data';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';
import * as Mock from "mockjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
    constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService) {
                const  data = Mock.mock({
                  'list|1-10': [{
                      'id|+1': 1
                  }]
              });
                console.log(data);
    ChatExampleData.init(messagesService, threadsService, usersService);
  }
}
