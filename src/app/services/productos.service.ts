import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  base = './assets/imgs/productos/';
  private productos: Producto[] = [
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
    {
      nombre: 'lino',
      descripcion: `El aceite de coco es un aceite vegetal,
       conocido también como manteca de coco.
        Se trata de una sustancia grasa que contiene
         cerca del 90 % de ácidos saturados extraídos
          mediante prensado de la pulpa o la carne de los cocos.`,
      img: this.base + 'aceite-coco.jpg',
      valor: 45,
      stock: 50
    },
    {
      nombre: 'chia',
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
  public getProductos() {
    return this.productos;
  }
  public getProducto( id: number) {
    return this.productos[id];
  }
  public buscarProductos(termino: string) {
    let prodArr: Producto[] = [];
    termino = termino.toLowerCase();
    for(let prod of this.productos) {
      let nom = prod.nombre.toLowerCase();
      if(nom.indexOf( termino ) >= 0) {
        prodArr.push(prod);
      }
    }
    return prodArr;
  }

constructor() { }

}

export interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
  valor: number;
  stock: number;
}