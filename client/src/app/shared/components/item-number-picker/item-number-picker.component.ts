import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { ProductVariant } from '@src/app/types';

@Component({
  selector: 'shared-item-number-picker',
  templateUrl: './item-number-picker.component.html',
  styleUrls: ['./item-number-picker.component.scss'],
})
export class ItemNumberPickerComponent implements OnInit, OnChanges {
  @Input() defaultNumber: number;

  @Output() changedItemNumber = new EventEmitter<number>();

  itemNumber: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.itemNumber = this.defaultNumber;
    this.changedItemNumber.emit(this.itemNumber);
  }

  increase(): void {
    this.itemNumber++;
    this.changedItemNumber.emit(this.itemNumber);
  }

  decrease(): void {
    this.itemNumber--;
    this.changedItemNumber.emit(this.itemNumber);
  }
}
