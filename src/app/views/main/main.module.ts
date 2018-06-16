import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import {SharedModule} from '../../shared.module';
import {SocketService} from '../../core/socket.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [MainComponent],
  providers: [ SocketService ]
})
export class MainModule { }
