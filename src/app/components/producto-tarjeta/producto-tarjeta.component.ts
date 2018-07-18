import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {

  @Input() producto: any = {};
  @Input() index: number;

  // debemos indicarle que va emitir esta función
  @Output() prodSeleccionado: EventEmitter<number>;
  constructor(private router: Router) {
    // Inicializo el eventemitter
    this.prodSeleccionado = new EventEmitter();
   }
   verProd() {
    this.router.navigate(['/detalle', this.index]);
    this.prodSeleccionado.emit(this.index);
  }

  ngOnInit() {
  }


}
