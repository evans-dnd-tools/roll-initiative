import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IndexElementType } from 'src/models/enums/index-element-type';

@Component({
  selector: 'index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent {

  //#region ------ READ-ONLY ------

  readonly IndexElementType = IndexElementType;

  //#endregion

  //#region ------ PROPERTIES ------

  // @Input() in setter
  private _activeType: string;

  @Output()
  activeTypeChange: EventEmitter<string> = new EventEmitter<string>();

  // @Input() in setter
  private _filter: string;

  @Output()
  filterChange: EventEmitter<string> = new EventEmitter<string>();

  types: string[];
  self = (o: any) => o;

  //#endregion

  //#region ------ CONSTRUCTOR ------

  constructor() {
    this.types = Object.values(this.IndexElementType);
    this.types.unshift('Tous');
  }

  //#endregion

  get activeType(): string {
    return this._activeType;
  }

  @Input() set activeType(value: string) {
    this._activeType = value;
    this.activeTypeChange.emit(value);
  }

  get filter(): string {
    return this._filter;
  }
  @Input() set filter(value: string) {
    this._filter = value;
    this.filterChange.emit(value);
  }
}
