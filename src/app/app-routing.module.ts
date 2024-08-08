import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { StatisticsComponent } from './dash-board/statistics/statistics.component';
import { ReportsComponent } from './dash-board/reports/reports.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  
  
  {
    path: 'dashboard',
    component: DashBoardComponent,
    children: [
      { path: 'statistics', component: StatisticsComponent },
      { path: 'reports', component: ReportsComponent }
    ]
  },
  { path: 'user/:id', component: UserComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
