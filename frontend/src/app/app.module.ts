import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '*', component: ListAnimalsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListAnimalsComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
