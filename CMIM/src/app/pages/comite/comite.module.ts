import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComitePageRoutingModule } from './comite-routing.module';

import { ComitePage } from './comite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComitePageRoutingModule
  ],
  declarations: [ComitePage]
})
export class ComitePageModule {}
