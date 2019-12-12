import { Component } from '@angular/core';

@Component({
  selector: 'app-residentes',
  templateUrl: './residentes.page.html',
  styleUrls: ['./residentes.page.scss'],
})
export class ResidentesPage  {

  constructor( ) { }

  avatars = [
    {
      img: '01.png',
      seleccionado: false
    },
    {
      img: '02.png',
      seleccionado: false
    },
    {
      img: '03.png',
      seleccionado: false
    },
    {
      img: '04.png',
      seleccionado: false
    },
    {
      img: '05.png',
      seleccionado: true
    },
    {
      img: '06.png',
      seleccionado: false
    },
    {
      img: '07.png',
      seleccionado: false
    },
    {
      img: '08.png',
      seleccionado: false
    },
    {
      img: '09.png',
      seleccionado: false
    },
    {
      img: '10.png',
      seleccionado: false
    },
    {
      img: '.png',
      seleccionado: false
    },
  ];

  
    avatarSlide = {
      slidesPerView: 3.5
    };
    avatarActual = 'av-1.png';
  
    slideOpts = {
      centeredSlides: 'true'
    };

  
  
  }
  