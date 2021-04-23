import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: 'blocks', loadChildren: () => import('./block/block-routing.module').then((m) => m.BlockRoutingModule)}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
