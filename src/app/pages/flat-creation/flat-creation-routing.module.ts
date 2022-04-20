import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlatCreationComponent } from './flat-creation.component';

const routes: Routes = [
  {
    path: '',
    component: FlatCreationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlatCreationRoutingModule {}
