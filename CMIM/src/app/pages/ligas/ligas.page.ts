import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.page.html',
  styleUrls: ['./ligas.page.scss'],
})
export class LigasPage  {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  constructor(private iab: InAppBrowser, public navCtrl: NavController) { }


  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  navegar(ruta: string) {
    this.iab.create(ruta, '_system');
  }

}
