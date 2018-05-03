import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../service/web-socket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private _chatMessages: ChatMessage[] = [
    new ChatMessage('Antonio', 'czesc'),
    new ChatMessage('Marcin', 'czesc')
  ];

  private name;
  private message;
  private game = 'warcaby';
  private room;

  constructor(private ws: WebsocketService) {
    ws.stompClient.subscribe('/chat/' + this.getUrl(), (message) => {
      const chatMessage: ChatMessage = JSON.parse(message.body);
      this.chatMessages.push(chatMessage);
    });
  }

  ngOnInit() {
  }

  get chatMessages(): ChatMessage[] {
    return this._chatMessages;
  }

  set chatMessages(value: ChatMessage[]) {
    this._chatMessages = value;
  }

  private sendChatMessage() {
    const chatMessage = new ChatMessage(this.name, this.message);
    this.ws.sendChatMessage(chatMessage, this.getUrl());
  }

  private getUrl() {
    return this.game + (this.room !== undefined ? '/' + this.room : '');
  }
}

export class ChatMessage {
  private _from: string;
  private _message: string;

  constructor(from: string, message: string) {
    this._from = from;
    this._message = message;
  }

  get from(): string {
    return this._from;
  }

  set from(value: string) {
    this._from = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
