import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter } from 'src/models/filter';

@Component({
  selector: 'index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent {

  @Input()
  filters: Filter[];

  @Output()
  filtersChange: EventEmitter<Filter[]> = new EventEmitter<Filter[]>();

  constructor() {}

  toggleAll() {
    if (this.allActive) this.filters.forEach(f => f.active = false);
    else this.filters.forEach(f => f.active = true);

    this.onFilterChange();
  }

  onFilterChange() {
    this.filtersChange.emit(this.filters);
  }

  ////    SPECIAL GETTERS    ////

  get allActive() {
    return this.filters.every(f => f.active);
  }
}
