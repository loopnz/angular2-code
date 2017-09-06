import { Injectable } from '@angular/core';
import {Metric,AnalyticsImplementation} from '../analytics-demo/analytics-interface';

@Injectable()
export class AnalyticsService {

    constructor(private implement:AnalyticsImplementation){}

    record(metric:Metric):void{
        this.implement.recordEvent(metric);
    }
}
