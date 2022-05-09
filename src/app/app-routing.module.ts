import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'new-flat',
    loadChildren: () => import('./pages/flat-creation/flat-creation.module').then((m) => m.FlatCreationModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'flat',
    loadChildren: () => import('./pages/flat/flat.module').then((m) => m.FlatModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user-account/user-account.module').then((m) => m.UserAccountModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'advanced-search',
    loadChildren: () => import('./pages/advanced-search/advanced-search.module').then((m) => m.AdvancedSearchModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
