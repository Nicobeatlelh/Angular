import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
  exports: [RouterModule]
})

export class APP_ROUTING { }