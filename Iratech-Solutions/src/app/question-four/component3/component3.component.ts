import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.less'],
})
export class Component3Component implements OnInit {
  constructor(public shared: SharedServiceService) {}

  ngOnInit(): void {}
}
