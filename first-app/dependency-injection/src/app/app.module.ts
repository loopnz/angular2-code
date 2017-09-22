import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { LocationStrategy , HashLocationStrategy } from '@angular/common';

import { urlConfig } from './config/config';
import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserService } from './services/user.service';
import { AnalyticsService } from './services/metric.service';
import { AnalyticsImplementation, Metric } from './analytics-demo/analytics-interface';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';

const routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home', component: UserDemoComponent
  },{
    path:'about',component:AnalyticsDemoComponent
  }];


@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ...urlConfig,
    {provide:LocationStrategy,useClass:HashLocationStrategy},
    UserService,
    { provide: 'API_URL', useValue: 'http://api/' },
    {
      provide: AnalyticsService,
      deps: [Http, 'API_URL'],
      useFactory(http, apiUrl) {
        const implementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric) => {
            console.log('this metric is', metric);
            console.log('send to', apiUrl);
          }
        };
        return new AnalyticsService(implementation);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
