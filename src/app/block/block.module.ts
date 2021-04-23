import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {BlockRoutingModule} from './block-routing.module';
import {BlocksListComponent} from './components/blocks-list/blocks-list.component';


@NgModule({
  declarations: [
    BlocksListComponent
  ],
  imports: [
    SharedModule,
    BlockRoutingModule
  ]
})
export class BlockModule {
}
