import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
  ]
})
export class FeatureModule { }
