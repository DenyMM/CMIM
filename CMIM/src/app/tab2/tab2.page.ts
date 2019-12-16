import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {}

  async irPagina(pagina: any) {
    this.navCtrl.navigateForward('/tabs/tab2/' + pagina);
  }

  async irtab(tab: any) {
    this.navCtrl.navigateForward('/tabs/' + tab);
  }

  navegar(ruta: string) {
    this.iab.create(ruta, '_system');
  }

}
