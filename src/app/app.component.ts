import { Component } from '@angular/core';
import { WebsocketService } from './service/web-socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private ws: WebsocketService, private router: Router) {
    ws.initializeWebSocketConnection();
  }
}

export interface Message {
  author: string;
  message: string;
}
