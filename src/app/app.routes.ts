import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ProductosComponent } from './components/productos/productos.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class APP_ROUTING { }