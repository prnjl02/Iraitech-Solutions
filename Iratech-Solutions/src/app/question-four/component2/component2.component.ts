import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.less'],
})
export class Component2Component implements OnInit {
  constructor(public shared: SharedServiceService) {}

  ngOnInit(): void {}
}
