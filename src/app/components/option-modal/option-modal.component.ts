import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'option-modal',
  templateUrl: './option-modal.component.html',
  styleUrls: ['./option-modal.component.scss']
})
export class OptionModalComponent implements OnChanges {

  ////    ATTRIBUTES    ////

  @Input() 
  open: boolean = false;

  @Output()
  close = new EventEmitter();


  saveOptions: boolean = true;
  saveTeam: boolean = false;
  groupTurnByTeam: boolean = false;

  hostElement: HTMLElement;

  ////    LIFE CYCLE    ////

  constructor(elementRef: ElementRef) {
    this.hostElement = elementRef.nativeElement;
  }

  ngOnChanges() {
    if (!this.open)
      this.hostElement.classList.add('hidden');
    else
      this.hostElement.classList.remove('hidden');
  }

  ////    FUNCTIONS    ////

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open)
      this.close.emit();
  }

  @HostListener('click', ['$event'])
  closeFromBlur(event: MouseEvent) {
    if (event.target === event.currentTarget && this.open)
      this.close.emit();
  }
}
