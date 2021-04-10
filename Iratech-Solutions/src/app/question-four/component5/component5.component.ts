import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.less'],
})
export class Component5Component implements OnInit {
  sharedValue: string = '';
  constructor(public shared: SharedServiceService) {}

  ngOnInit() {}
}
