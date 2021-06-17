import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosRoutingModule } from './nosotros.routing.module';
import { NosotrosComponent } from './nosotros.component';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerNosotrosComponent } from './banner-nosotros/banner-nosotros.component';
@NgModule({
  declarations: [NosotrosComponent, BannerNosotrosComponent],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class NosotrosModule { }
