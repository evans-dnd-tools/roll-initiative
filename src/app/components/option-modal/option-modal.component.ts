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

  ngOnInit(): void {
    const options = localStorage.getItem('options');

    if (options == null) return; // No options saved
    if (options === "👎") {
      this.saveOptions = false;
      return;
    }

    this.saveTeam = options.includes('saveTeam');
    this.groupTurnByTeam = options.includes('groupTurnByTeam');
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
      this.saveAndClose();
  }

  @HostListener('click', ['$event'])
  closeFromBlur(event: MouseEvent) {
    if (event.target === event.currentTarget && this.open) 
      this.saveAndClose();
  }

  emptyCache() {
    localStorage.clear();
  }

  saveAndClose() {
    let options = "👎";

    if (this.saveOptions) {
      options = "";
      if (this.saveTeam) options += "saveTeam";
      if (this.groupTurnByTeam) options += "groupTurnByTeam";
    }

    localStorage.setItem('options', options);

    this.close.emit();
  }
}
