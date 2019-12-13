import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongresoPageRoutingModule } from './congreso-routing.module';

import { CongresoPage } from './congreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongresoPageRoutingModule
  ],
  declarations: [CongresoPage]
})
export class CongresoPageModule {}
