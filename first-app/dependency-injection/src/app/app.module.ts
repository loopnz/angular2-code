import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserService } from './services/user.service';
import { AnalyticsService } from './services/metric.service';
import { AnalyticsImplementation, Metric } from './analytics-demo/analytics-interface';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
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
