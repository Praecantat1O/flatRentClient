import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatComponent } from './flat.component';

const routes: Routes = [
  {
    path: ':id',
    component: FlatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlatRoutingModule {}
