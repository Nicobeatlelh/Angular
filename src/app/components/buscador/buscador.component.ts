import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../../services/productos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  productos: Producto[] = [];
  message = '';
  constructor(private _prodService: ProductosService, private _router: Router, private activarRuta: ActivatedRoute) {
  }

  ngOnInit() {
    this.activarRuta.params.subscribe( params => {
      if (this._prodService.buscarProductos(params['termino']).length !== 0) {
        this.message = '';
      this.productos = this._prodService.buscarProductos(params['termino']);
      }else {
        this.message = 'No se han encontrado resultados';
      }
    });
  }

}
