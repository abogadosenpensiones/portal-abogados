import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { ContactoRoutingModule } from './contacto.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormContactoMapaComponent } from './form-contacto-mapa/form-contacto-mapa.component';

@NgModule({
  declarations: [ContactoComponent, FormContactoMapaComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    SharedModule
  ]
})
export class ContactoModule { }
