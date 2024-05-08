import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstFormComponent } from './Forms/MatLibForms/first-form/first-form.component';
import { SecondFormComponent } from './Forms/MatLibForms/second-form/second-form.component';

const routes: Routes = [
{
  path: '',
  component: FirstFormComponent
 
},
{
  path: '/second',
  component: SecondFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
