import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SMNUIModule, UiToolbarService} from 'ng-smn-ui';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    SMNUIModule,
    HttpModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [UiToolbarService],
})
export class SharedModule {
}
