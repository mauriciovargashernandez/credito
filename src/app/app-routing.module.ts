import { NgModule  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/login/login.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }

  // {
  //   path: '',
  //   loadChildren: () => {
  //     return import('./components/components.module').then(m => m.ComponentsModule);
  //   }
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
