import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const routes = [
  { path: '', redirectTo: "/dashboard", pathMatch: "full" },
  { path: '**', component: NopageFoundComponent },
]



@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule,AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
