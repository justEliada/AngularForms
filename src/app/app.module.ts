import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstFormComponent } from './Forms/MatLibForms/first-form/first-form.component';
import { SecondFormComponent } from './Forms/MatLibForms/second-form/second-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    SecondFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
