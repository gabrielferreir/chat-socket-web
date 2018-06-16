import {Component, ElementRef, OnInit} from '@angular/core';
import {SocketService} from '../../core/socket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  info: any;
  messages: any;

  constructor(private socketService: SocketService,
              private element: ElementRef) {
    this.info = {};
    this.messages = [];
  }

  ngOnInit() {

    this.socketService.newMessage.subscribe(res => {
      // console.log(res);
      this.receiveMessage(res);
      setTimeout(() => {
        const el = this.element.nativeElement.querySelector('.main__chat__content');
        const scroll = (el.scrollHeight - el.offsetHeight);
        el.scrollTo(0, scroll);
      });
    });

  }

  sendMessage(message) {
    this.socketService.sendMessage(message);
    this.info.sendMessage = '';
  }

  receiveMessage(message) {
        this.messages.push(message);
  }


}
