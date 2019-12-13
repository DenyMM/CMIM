import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongresoPage } from './congreso.page';

const routes: Routes = [
  {
    path: '',
    component: CongresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongresoPageRoutingModule {}
