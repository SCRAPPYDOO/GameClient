import { Injectable } from '@angular/core';
import { Configuration } from '../configuration/configuration';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable()
export class WebsocketService {
  private _stompClient;

  constructor() {
  }

  public initializeWebSocketConnection(){
    const ws = new SockJS(Configuration.SERVER_URL);
    this._stompClient = Stomp.over(ws);
    const that = this;
    this._stompClient.connect({}, function(frame) {
      /*that._stompClient.subscribe('/chat', (message) => {
        if (message.body) {
          console.log('Message body ' + message.body);
        }
      });*/
    });
  }

  get stompClient() {
    return this._stompClient;
  }

  public sendChatMessage(message: any, url: string) {
    this.sendMessage(message, Configuration.CHAT_URL + url);
  }

  public sendMessage(message: any, url: string) {
    this._stompClient.send(url , {}, message);
  }
}
