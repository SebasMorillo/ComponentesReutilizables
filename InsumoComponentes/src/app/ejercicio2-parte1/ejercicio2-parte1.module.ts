import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio2Parte1PageRoutingModule } from './ejercicio2-parte1-routing.module';

import { Ejercicio2Parte1Page } from './ejercicio2-parte1.page';
import { NavBarSharedModule } from '../nav-bar-shared/nav-bar-shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio2Parte1PageRoutingModule,
    NavBarSharedModule
  ],
  declarations: [Ejercicio2Parte1Page]
})
export class Ejercicio2Parte1PageModule {}
