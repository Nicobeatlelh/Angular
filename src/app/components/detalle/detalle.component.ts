import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto: any = {};
  constructor(private activarRuta: ActivatedRoute, private _prodService: ProductosService) {
    this.activarRuta.params.subscribe( parametros => {
      this.producto = this._prodService.getProducto( parametros['id']);
    });
   }

  ngOnInit() {
  }

}
