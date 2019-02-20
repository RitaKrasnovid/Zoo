import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CommonNewsComponent } from './home/common-news/common-news.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HeaderComponent } from './header/header.component';
import { AnimalFilterComponent } from './animals-list/animal-filter/animal-filter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsComponent } from './news-list/news/news.component';
import { TruncatePipe } from './pipes/truncate.pipe';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'animals', component: AnimalsListComponent},
  { path: 'news', component: NewsListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,
    AnimalComponent,
    HomeComponent,
    CommonNewsComponent,
    ScheduleComponent,
    HeaderComponent,
    AnimalFilterComponent,
    NewsListComponent,
    NewsComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
