import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ServicesComponent,
    RouterModule
  ]
})
export class FeatureModule { }
