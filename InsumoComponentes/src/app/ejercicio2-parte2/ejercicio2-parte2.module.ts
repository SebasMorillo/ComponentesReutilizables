import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio2Parte2PageRoutingModule } from './ejercicio2-parte2-routing.module';

import { Ejercicio2Parte2Page } from './ejercicio2-parte2.page';
import { NavBarSharedModule } from '../nav-bar-shared/nav-bar-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejercicio2Parte2PageRoutingModule,
    NavBarSharedModule
  ],
  declarations: [Ejercicio2Parte2Page]
})
export class Ejercicio2Parte2PageModule {}
