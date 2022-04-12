import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Tabla de Mando',
        type: 'link',
        icon: 'ti-home'
      },
  
      {
        state: 'seguridad',
        short_label: 'S',
        name: 'Seguridad',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'usuario',
            name: 'Usuario'
          },
          {
            state: 'perfil',
            name: 'Perfil'
          }
        ]
      },
      {
        state: 'requisitos',
        short_label: 'R',
        name: 'Requisito de Servicios',
        type: 'link',
        icon: 'ti-crown'
      },
      {
        state: 'atencion',
        short_label: 'A',
        name: 'Puntos de Atención',
        type: 'link',
        icon: 'ti-map-alt'
      },
    
      {
        state: 'configuracion',
        short_label: 'C',
        name: 'Configuración',
        type: 'link',
        icon: 'ti-receipt'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
