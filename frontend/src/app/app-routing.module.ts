import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'',component:LoginComponent},

  {path:'projects', component : ProjectComponent},
  {path:'projects/:id',component:DetailComponent},
  {path:'participants', component : PeopleComponent},
  {path:'participant/:id',component:PersonComponent},

  {path:'todo', component:TodoComponent},
  
  {path:"register", component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [ProjectComponent, DetailComponent]