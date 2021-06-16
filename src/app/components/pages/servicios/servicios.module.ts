import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios.component';
import { ServociosRoutingModule } from './servicios.routing.module';



@NgModule({
  declarations: [ServiciosComponent],
  imports: [
    CommonModule,
    ServociosRoutingModule
  ]
})
export class ServiciosModule { }
