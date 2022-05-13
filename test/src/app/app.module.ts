import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListActivityComponent } from './list-activity/list-activity.component';
import { DetailsActivityComponent } from './details-activity/details-activity.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListActivityComponent,
    DetailsActivityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: DashboardComponent },
      { path: 'list', component: ListActivityComponent },
      { path: 'details', component: DetailsActivityComponent },
      { path: '**', redirectTo: 'home' }
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
