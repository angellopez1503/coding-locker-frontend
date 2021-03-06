import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit ,OnDestroy {

  titulo!: string;
  tituloSubs$:Subscription;

  constructor(
    private router:Router
  ) {
    this.tituloSubs$=this.getArgumentos();
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  ngOnInit(): void {
  }

  getArgumentos() {

   return this.router.events.pipe(

      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    ).subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = `AdminLte - ${titulo}`;
    })
  }

}
