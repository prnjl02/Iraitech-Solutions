import { Component, OnInit } from '@angular/core';
import { phoneNumber } from '../model/number.model';

@Component({
  selector: 'app-phone-number-form',
  templateUrl: './phone-number-form.component.html',
  styleUrls: ['./phone-number-form.component.less'],
})
export class PhoneNumberFormComponent implements OnInit {
  phone = new phoneNumber();
  dataArray = Array();
  constructor() {}

  ngOnInit() {
    this.phone = new phoneNumber();
    this.dataArray.push(this.phone);
  }

  addForm() {
    this.phone = new phoneNumber();
    this.dataArray.push(this.phone);
  }
  removeForm(index: any) {
    this.dataArray.splice(index);
  }
  onSubmit() {
    console.log(this.dataArray);
  }
}
