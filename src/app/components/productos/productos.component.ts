import { ProductosService, Producto } from '../../services/productos.service';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent {

  productos: Producto[] = [];
  message = '';
  constructor(private _prodService: ProductosService, private _router: Router, private activarRuta: ActivatedRoute) {
    this.activarRuta.params.subscribe( params => {
      if (this._prodService.buscarProductos(params['nom']).length !== 0) {
        this.message = '';
      this.productos = this._prodService.buscarProductos(params['nom']);
      }else {
        this.message = 'No se han encontrado resultados';
      }
    });
  }

  ngOnInit() {
    this.productos = this._prodService.getProductos();
  }

  verProducto(i: number) {
    this._router.navigate(['/detalle', i ]);
  }

}
