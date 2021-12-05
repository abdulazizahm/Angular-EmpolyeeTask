import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpolyeeComponent } from './empolyees/add-empolyee/add-empolyee.component';
import { EmpolyeesComponent } from './empolyees/empolyees.component';
import { UpdateEmpolyeeComponent } from './empolyees/update-empolyee/update-empolyee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpolyeesComponent,
    AddEmpolyeeComponent,
    UpdateEmpolyeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
