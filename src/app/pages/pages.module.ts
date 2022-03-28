import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';




@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    PagesComponent,
    StockComponent,
  ],
  imports: [
    CommonModule,
    //PagesRoutingModule,
    SharedModule,
    RouterModule

  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    PagesComponent,
    StockComponent
  ]
})
export class PagesModule { }
