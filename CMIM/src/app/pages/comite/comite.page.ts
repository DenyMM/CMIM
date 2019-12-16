import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-comite',
  templateUrl: './comite.page.html',
  styleUrls: ['./comite.page.scss'],
})
export class ComitePage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;

  segment = 0;

  constructor() { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

}