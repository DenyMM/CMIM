import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComitePage } from './comite.page';

const routes: Routes = [
  {
    path: '',
    component: ComitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComitePageRoutingModule {}
