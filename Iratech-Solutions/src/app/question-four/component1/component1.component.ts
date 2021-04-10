import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.less'],
})
export class Component1Component implements OnInit {
  constructor(public shared: SharedServiceService) {}

  ngOnInit(): void {}
}
