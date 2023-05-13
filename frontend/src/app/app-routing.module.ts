import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:"", component:DetailComponent},
  {path:'projects', component : ProjectComponent},
  {path:'ptojects/:id',component:DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [ProjectComponent, DetailComponent]