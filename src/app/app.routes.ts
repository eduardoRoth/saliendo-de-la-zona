import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/inicio/inicio.page').then((m) => m.InicioPage),
  },
  {
    path: 'zone',
    loadComponent: () =>
      import('./pages/zone/zone.page').then((c) => c.ZonePage),
  },
  {
    path: 'zoneless',
    loadComponent: () =>
      import('./pages/zoneless/zoneless.page').then((c) => c.ZonelessPage),
  },
];
