import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentesPage } from './residentes.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentesPageRoutingModule {}
