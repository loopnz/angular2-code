import { Component, OnInit ,Input ,ChangeDetectionStrategy } from '@angular/core';
import { Profile } from "../profile.model";

@Component({
  selector: 'app-default-change-detection',
  templateUrl: './default-change-detection.component.html',
  styleUrls: ['./default-change-detection.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class DefaultChangeDetectionComponent implements OnInit {
  @Input() profile:Profile;
  constructor() { }

  ngOnInit() {
  }

}
