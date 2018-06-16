import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;

  public newMessage = new Subject<any>();

  constructor() {
    this.socket = io('http://localhost:3000');

    this.socket.emit('join', {data: 'Gabriel'});

    this.socket.on('message', res => {
      this.newMessage.next(res);
    })
  }

  public sendMessage(message) {
    this.socket.emit('sendMessage', {message: message});
  }



}
