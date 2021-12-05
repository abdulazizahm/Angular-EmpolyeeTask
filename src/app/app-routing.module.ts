import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpolyeeComponent } from './empolyees/add-empolyee/add-empolyee.component';
import { EmpolyeesComponent } from './empolyees/empolyees.component';
import { UpdateEmpolyeeComponent } from './empolyees/update-empolyee/update-empolyee.component';

const routes: Routes = 
[
  { path: 'empolyee', component: EmpolyeesComponent},
  { path: 'empolyee/Add', component: AddEmpolyeeComponent },
  { path: 'empolyee/Edit/:id', component: UpdateEmpolyeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
