import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'ejercicio1',
    pathMatch: 'full'
  },
  {
    path: 'ejercicio1',
    loadChildren: () => import('./ejercicio1/ejercicio1.module').then( m => m.Ejercicio1PageModule)
  },
  {
    path: 'ejercicio2-parte1',
    loadChildren: () => import('./ejercicio2-parte1/ejercicio2-parte1.module').then( m => m.Ejercicio2Parte1PageModule)
  },
  {
    path: 'ejercicio2-parte2',
    loadChildren: () => import('./ejercicio2-parte2/ejercicio2-parte2.module').then( m => m.Ejercicio2Parte2PageModule)
  },
  {
    path: 'ejercicio3',
    loadChildren: () => import('./ejercicio3/ejercicio3.module').then( m => m.Ejercicio3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
