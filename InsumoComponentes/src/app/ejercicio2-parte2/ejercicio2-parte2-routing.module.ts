import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio2Parte2Page } from './ejercicio2-parte2.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio2Parte2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio2Parte2PageRoutingModule {}
