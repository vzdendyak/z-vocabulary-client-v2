import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BlocksListComponent} from './components/blocks-list/blocks-list.component';
import {BlockInfoComponent} from './components/block-info/block-info.component';

const routes: Routes = [
  {path: '', component: BlocksListComponent},
  {path: 'blocks/:id', component: BlockInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockRoutingModule {
}
