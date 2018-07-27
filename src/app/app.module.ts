import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { ProductosService } from './services/productos.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ProductosComponent,
    DetalleComponent,
    ProductoTarjetaComponent,
    BuscadorComponent,
    BarraLateralComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
