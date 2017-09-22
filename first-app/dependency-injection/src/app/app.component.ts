import { Component ,Inject} from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data:Object;
  loading:boolean;
  constructor(private http:Http, @Inject('searchOrgGroupURL') private url:string){

  }
  makeRequest():void{
    this.loading = true;
    this.http.request(this.url).subscribe((res:Response)=>{
      this.loading=false;
      this.data=res.json();
    });
  }
}
