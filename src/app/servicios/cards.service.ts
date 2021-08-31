import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cards: Cards[]= [

    {
      title: "Buscador de Super Heroes",
      imagen:"assets/img/card01.png",
      tecnologias: "Realizado con Angular",
      urlProyecto:"https://wiki-de-super-heroes-three.vercel.app/#/home",
      urlGitHub:"https://github.com/hrsd83/Wiki-de-Super-Heroes"
    },
    {
      title: "Buscador del Clima",
      imagen:"assets/img/card02.png",
      tecnologias: "Realizado con Html, Css3 y Javascript",
      urlProyecto:"https://clima-five.vercel.app/",
      urlGitHub:"https://github.com/hrsd83/Clima"

    },
    {
      title: "Carrito de compras",
      imagen:"assets/img/card03.png",
      tecnologias: "Realizado con Html, Css3 y Javascript",
      urlProyecto:"https://ecommerce1-ten.vercel.app/",
      urlGitHub:"https://github.com/hrsd83/Ecommerce1"
    }
  ];

  constructor() {
    console.log('servicio listo')
   }

   getCards(): Cards[] {
    return this.cards;
  }
}

export interface Cards{
  title: string;
  imagen:string
  tecnologias: string;
  urlProyecto:string;
  urlGitHub: string

};
