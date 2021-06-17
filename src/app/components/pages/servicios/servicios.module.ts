import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios.component';
import { ServociosRoutingModule } from './servicios.routing.module';
import { TarjetasServiciosComponent } from './tarjetas-servicios/tarjetas-servicios.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ServiciosComponent, TarjetasServiciosComponent],
  imports: [
    CommonModule,
    ServociosRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
  ],
})
export class ServiciosModule {}
