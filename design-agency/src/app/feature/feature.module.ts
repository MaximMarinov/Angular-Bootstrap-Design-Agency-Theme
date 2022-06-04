import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    TestimonialsComponent
  ]
})
export class FeatureModule { }
