import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-congreso',
  templateUrl: './congreso.page.html',
  styleUrls: ['./congreso.page.scss'],
})
export class CongresoPage  {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {}

  async irPagina(pagina: any) {
    this.navCtrl.navigateForward('/tabs/tab2/congreso/' + pagina);
  }

  async irtab(tab: any) {
    this.navCtrl.navigateForward('/tabs/' + tab);
  }

  navegar(ruta: string) {
    this.iab.create(ruta, '_system');
  }
}
