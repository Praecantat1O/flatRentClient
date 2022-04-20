import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'new-flat',
    loadChildren: () => import('./pages/flat-creation/flat-creation.module').then((m) => m.FlatCreationModule),
  },
  {
    path: 'flat',
    loadChildren: () => import('./pages/flat/flat.module').then((m) => m.FlatModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/user-account/user-account.module').then((m) => m.UserAccountModule),
  },
  {
    path: 'advanced-search',
    loadChildren: () => import('./pages/advanced-search/advanced-search.module').then((m) => m.AdvancedSearchModule),
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
