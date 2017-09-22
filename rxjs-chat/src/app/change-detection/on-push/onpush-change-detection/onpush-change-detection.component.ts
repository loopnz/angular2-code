import { Component, OnInit ,Input , ChangeDetectionStrategy} from '@angular/core';
import { Profile } from "../profile.model";

@Component({
  selector: 'app-onpush-change-detection',
  templateUrl: './onpush-change-detection.component.html',
  styleUrls: ['./onpush-change-detection.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnpushChangeDetectionComponent implements OnInit {
  @Input() profile:Profile;
  constructor() { }

  ngOnInit() {
  }

}
