import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio2Parte1Page } from './ejercicio2-parte1.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio2Parte1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio2Parte1PageRoutingModule {}
