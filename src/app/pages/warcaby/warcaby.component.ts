import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '../../service/web-socket.service';

@Component({
  selector: 'app-warcaby',
  templateUrl: './warcaby.component.html',
  styleUrls: ['./warcaby.component.css']
})
export class WarcabyComponent implements OnInit {

  constructor(private ws: WebsocketService) { }

  ngOnInit() {
  }

}
