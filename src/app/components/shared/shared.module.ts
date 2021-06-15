import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CtaComponent } from './cta/cta.component';
import { ShopsidebarComponent } from './shopsidebar/shopsidebar.component';
import { BlogsidebarComponent } from './blogsidebar/blogsidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    CtaComponent,
    ShopsidebarComponent,
    BlogsidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    SlickCarouselModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    CtaComponent,
    ShopsidebarComponent,
    BlogsidebarComponent,
  ],
})
export class SharedModule {}
