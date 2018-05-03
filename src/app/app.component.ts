import { Component } from '@angular/core';
import { WebsocketService } from './service/web-socket.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Configuration } from './configuration/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  public messages: Subject<Message>;

  constructor(private ws: WebsocketService) {
    this.messages = <Subject<Message>>ws
      .connect(Configuration.SERVER_URL)
      .map((response: MessageEvent): Message => {
        const data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message
        };
      });
  }
}

export interface Message {
  author: string;
  message: string;
}
