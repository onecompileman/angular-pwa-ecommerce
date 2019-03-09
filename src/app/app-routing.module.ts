import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialDataResolver } from './core/resolvers/initial-data.resolver';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    resolve: {
      init: InitialDataResolver
    }
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    resolve: {
      init: InitialDataResolver
    }
  },
  {
    path: '**',
    redirectTo: 'user'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
