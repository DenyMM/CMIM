import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentesPageRoutingModule } from './residentes-routing.module';

import { ResidentesPage } from './residentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentesPageRoutingModule
  ],
  declarations: [ResidentesPage]
})
export class ResidentesPageModule {}
