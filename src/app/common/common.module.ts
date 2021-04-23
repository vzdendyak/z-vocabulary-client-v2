import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class AppCommonModule {
}
