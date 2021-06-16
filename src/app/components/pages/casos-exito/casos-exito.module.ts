import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasosExitoComponent } from './casos-exito.component';
import { CasosExitoRoutingModule } from './casos-exito.routing.module';


@NgModule({
  declarations: [CasosExitoComponent],
  imports: [
    CommonModule,
    CasosExitoRoutingModule
  ]
})
export class CasosExitoModule { }
