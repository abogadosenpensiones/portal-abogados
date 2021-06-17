import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { InfoDerechoComponent } from './info-derecho-banner/info-derecho-banner.component';
import { PorqueNosotrosComponent } from './porque-nosotros/porque-nosotros.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    InfoDerechoComponent,
    PorqueNosotrosComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
  ],
})
export class HomeModule {}
