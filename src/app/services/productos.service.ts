import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  base = './assets/imgs/productos/';
  productos: Producto[] = [
    {
      nombre: 'aceite de coco',
      descripcion: `El aceite de coco es un aceite vegetal,
       conocido también como manteca de coco.
        Se trata de una sustancia grasa que contiene
         cerca del 90 % de ácidos saturados extraídos
          mediante prensado de la pulpa o la carne de los cocos.`,
      img: this.base + 'aceite-coco.jpg',
      valor: 45,
      stock: 50
    },
  ];

constructor() { }

}

export interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  valor: number;
  stock: number;
}