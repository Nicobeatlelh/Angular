import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent {

  @Input() src: string;
  base = './assets/imgs/productos/';
 productos: string[] = ['aceite-coco.jpg', 'chaucha-vainilla.jfif',
 'chia-molida.jpg', 'datiles.jfif', 'amaranto.jpg', 'lino-molido.jpg', 'pimenton.jpg' ];
prodObj: Object[] = crearProducto(this.productos);
productosLista: string[] = this.productos.map(item => (this.base + item) ) ;

}

function crearProducto(nom_prod: string[]) {
let prods: Object[] = [];
nom_prod.forEach(element => {
prods.push(new Producto(element));
});
return prods;
}
class Producto {
  name: string;
  description: string;
  constructor(prod_name: string, description?: string) {
    this.name = './assets/imgs/productos/' + prod_name ;
    this.description = description;
  }

}
