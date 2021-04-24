import {NgModule} from '@angular/core';
import {WordInfoComponent} from './components/word-info/word-info.component';
import {WordRoutingModule} from './word-routing.module';
import {SharedModule} from '../shared/shared.module';
import { MeaningInfoComponent } from './components/meaning-info/meaning-info.component';


@NgModule({
  declarations: [WordInfoComponent, MeaningInfoComponent],
  imports: [
    SharedModule,
    WordRoutingModule
  ]
})
export class WordModule {
}
