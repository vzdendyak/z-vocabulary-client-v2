import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WordInfoComponent} from './components/word-info/word-info.component';

const routes: Routes = [
  {path: 'words/:id', component: WordInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordRoutingModule {
}
