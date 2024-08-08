import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { StatisticsComponent } from './dash-board/statistics/statistics.component';
import { ReportsComponent } from './dash-board/reports/reports.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomePageComponent,
    DashBoardComponent,
    StatisticsComponent,
    ReportsComponent,
    UserComponent,
    PageNotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
