import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ElectionsComponent } from './elections/elections.component'
import { VoteComponent } from './vote/vote.component';
import { ResultsComponent } from './results/results.component';
import { DecisionHelperComponent } from './decision-helper/decision-helper.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'LOGIN'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'dashboard'
    }
  },
  {
    path: 'elections/:str',
    component: ElectionsComponent,
    data: {
      title: 'elections'
    }
  },
  {
    path: 'vote',
    component: VoteComponent,
    data: {
      title: 'vote'
    }
  },
  {
    path: 'results',
    component: ResultsComponent,
    data: {
      title: 'elections'
    }
  },
  {
    path: 'decisionHelper',
    component: DecisionHelperComponent,
    data: {
      title: 'decisionHelper'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
