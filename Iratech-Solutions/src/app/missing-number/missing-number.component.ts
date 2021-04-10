import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missing-number',
  templateUrl: './missing-number.component.html',
  styleUrls: ['./missing-number.component.less'],
})
export class MissingNumberComponent implements OnInit {
  inputValue: number = 0;
  result: number = 0;
  constructor() {}

  ngOnInit(): void {}

  resultedNumber(inputValue: number) {
    if (inputValue % 2 === 0) {
      this.result = inputValue * inputValue - 1;
    } else {
      this.result = inputValue * inputValue + 1;
    }
  }
}
