import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';

import { AppComponent } from './app.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { PopupDirective } from './popup.directive';
import { DefaultChangeDetectionComponent } from './change-detection/on-push/default-change-detection/default-change-detection.component';
import { OnpushChangeDetectionComponent } from './change-detection/on-push/onpush-change-detection/onpush-change-detection.component';
import { OnpushComponent } from './change-detection/on-push/onpush/onpush.component';
import { SettingModule } from "./setting/setting.module";
import { EmployModule } from "./employ/employ.module";

@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatThreadComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    ChatPageComponent,
    FromNowPipe,
    PopupDirective,
    DefaultChangeDetectionComponent,
    OnpushChangeDetectionComponent,
    OnpushComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SettingModule,
    EmployModule
  ],
  providers: [
    MessagesService, ThreadsService, UsersService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
