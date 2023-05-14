import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './project/project.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PeopleComponent } from './people/people.component';
import { PeopleprojectsComponent } from './peopleprojects/peopleprojects.component';
import { PersonComponent } from './person/person.component';
import { TodoComponent } from './todo/todo.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent,
    PeopleComponent,
    PeopleprojectsComponent,
    PersonComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

