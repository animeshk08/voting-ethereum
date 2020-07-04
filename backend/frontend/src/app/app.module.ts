import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ElectionsComponent } from './elections/elections.component';
import { ElectionCardComponent } from './elections/election-card/election-card.component';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import { VoteComponent } from './vote/vote.component';
import { ResultsComponent } from './results/results.component';
import { BackgroundComponent } from './background/background.component';
import { DecisionHelperComponent } from './decision-helper/decision-helper.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ElectionsComponent,
    ElectionCardComponent,
    VoteComponent,
    ResultsComponent,
    BackgroundComponent,
    DecisionHelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    NgxUiLoaderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
