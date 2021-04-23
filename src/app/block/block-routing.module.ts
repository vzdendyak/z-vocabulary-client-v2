import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BlocksListComponent} from './components/blocks-list/blocks-list.component';

const routes: Routes = [
  {path: '', component: BlocksListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockRoutingModule {
}
