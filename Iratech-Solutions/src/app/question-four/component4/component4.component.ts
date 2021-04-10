import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.less'],
})
export class Component4Component implements OnInit {
  sharedMessage: string = '';
  constructor(public shared: SharedServiceService) {}

  ngOnInit() {}
}
