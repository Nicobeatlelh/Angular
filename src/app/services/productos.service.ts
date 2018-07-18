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
      descripcion: `El lino o linaza es una
       planta herbácea de la familia de las lináceas.
        Su tallo se utiliza para confeccionar tejidos
         y su semilla, llamada linaza,
       se utiliza para extraer harina y aceite.`,
      img: this.base + 'lino.jpg',
      valor: 45,
      stock: 50
    },
    {
      nombre: 'chia',
      descripcion: `La chía o chan (Salvia hispanica L.)
       es una planta herbácea de la familia
        de las lamiáceas; es nativa del centro
         y sur de México, El Salvador, Guatemala,
          Nicaragua1​ y Costa Rica y, junto con el lino
           (Linum usitatissimum), es una de las especies
            vegetales con la mayor concentración de ácido
             graso alfa-linolénico
       omega 3 conocidas hasta 2006.`,
      img: this.base + 'chia.jpg',
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
    for(let i = 0; i < this.productos.length; i++) {
      let producto = this.productos[i];
      let nom = producto.nombre.toLowerCase();
      if(nom.indexOf( termino ) >= 0) {
        producto.idx = i;
        prodArr.push(producto);
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
  idx?: number;
}