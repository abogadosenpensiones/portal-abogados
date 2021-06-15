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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
