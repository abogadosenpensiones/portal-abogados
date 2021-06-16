import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // home
  {
    path: '',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
    data: { breadcrumb: 'Inicio' },
  },
  {
    path: 'nosotros',
    loadChildren: () =>
      import('./components/pages/nosotros/nosotros.module').then((m) => m.NosotrosModule),
    data: { breadcrumb: 'Nosotros' },
  },
  {
    path: 'equipo',
    loadChildren: () =>
      import('./components/pages/equipo/equipo.module').then((m) => m.EquipoModule),
    data: { breadcrumb: 'Equipo' },
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./components/pages/servicios/servicios.module').then((m) => m.ServiciosModule),
    data: { breadcrumb: 'Inicio' },
  },
  {
    path: 'casos-exito',
    loadChildren: () =>
      import('./components/pages/casos-exito/casos-exito.module').then((m) => m.CasosExitoModule),
    data: { breadcrumb: 'Inicio' },
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./components/pages/contacto/contacto.module').then((m) => m.ContactoModule),
    data: { breadcrumb: 'Inicio' },
  },
  {
    path: '**',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
    data: { breadcrumb: 'Inicio' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
