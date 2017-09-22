import { Component, OnInit ,Query } from '@angular/core';
import { Profile } from "../profile.model";
@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.css']
})
export class OnpushComponent implements OnInit {
  profile1:Profile = new Profile('tom','couty');
  profile2:Profile = new Profile('jim','hello');
  constructor() {
    setTimeout(()=>{
      this.profile1 = new Profile('nw tom','world');
    },3000);
    setTimeout(()=>{
      this.profile2 = new Profile('nw tom2','world22');
    },8000);
  }

  ngOnInit() {
  }

}
