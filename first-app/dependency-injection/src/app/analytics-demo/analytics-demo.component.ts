import { Component, OnInit, Inject } from '@angular/core';
import { AnalyticsService } from '../services/metric.service';
import { Metric } from '../analytics-demo/analytics-interface';

@Component({
  selector: 'app-analytics-demo',
  templateUrl: './analytics-demo.component.html',
  styleUrls: ['./analytics-demo.component.css']
})
export class AnalyticsDemoComponent implements OnInit {

  constructor(@Inject('API_URL') api:string,private analticsService: AnalyticsService) { }
  doAnalytic():void{
    console.log(this.analticsService);
    const metric:Metric={
      eventName:'click',
      scope:'doAnaltic'
    };
    this.analticsService.record(metric);
  }
  ngOnInit() {
  }

}
