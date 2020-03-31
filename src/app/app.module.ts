import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReposService } from './services/repos.service';

import {NgxPaginationModule} from 'ngx-pagination'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ListReposComponent } from './repos/list-repos.component';
import { RepoDetailsComponent } from './repos/repo-details.component';


const appRoutes: Routes = [
  { path: 'list',      component: ListReposComponent },
  { path: 'repos',  component: RepoDetailsComponent},
  { path: '',      redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListReposComponent,
    RepoDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [ReposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
