import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "./services/websocket.service";
import {webSocket, WebSocketSubject} from "rxjs/webSocket";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private socket$!: WebSocketSubject<any>;
  private userId!: string; // Add user ID
  title = 'b2b';
  constructor(private websocketService: WebsocketService) {

  }

  ngOnInit(): void {

  }

  sendMessage(userId:number): void {
    this.websocketService.sendMessage('Hello from Angular', userId);
  }
}


