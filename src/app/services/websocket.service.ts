import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject, WebSocketSubjectConfig} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket$!: WebSocketSubject<any>;
  private userId: string; // Add user ID
  constructor() {
    this.userId = 'yourUserId'; // Retrieve this from user context

  }

  sendMessage(msg: any, userId: number) {
    const wsConfig: WebSocketSubjectConfig<any> = {
      url:`ws://localhost:3000/?${userId}`,
      deserializer: msg => {
        try {
          return JSON.parse(msg.data);
        } catch (e) {
          return msg; // or handle the error
        }
      }
    };

    console.log('sending message: ', msg)
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = webSocket(wsConfig);
      this.socket$.subscribe(
        msg => console.log('message received: ', msg),
        err => console.log(err),
        () => console.log('complete')
      );
    }
      this.socket$.next(msg);

  }
}
