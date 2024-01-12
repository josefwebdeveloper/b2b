import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "../../services/websocket.service";
import {catchError, map, tap} from "rxjs";

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.scss']
})
export class WebsocketComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

}
