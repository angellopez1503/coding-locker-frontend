import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'dashboard',
      icon: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        {
          titulo: 'Usuarios',
          url: 'usuarios',
          icon:'fa fa-user'
        },
        {
          titulo: 'Productos',
          url: 'productos',
          icon:'fa fa-shopping-basket'
        },
        {
          titulo: 'Stock',
          url: 'stock',
          icon:'fa fa-table'
        }
      ]
    }
  ]

  constructor() { }
}
