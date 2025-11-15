import { Component, ElementRef, HostListener, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss']
})
export class ModalWrapperComponent implements OnInit {

  hostElement: HTMLElement;
  modalService: ModalService;

  @ViewChild('modalContent', { read: ViewContainerRef }) content: ViewContainerRef;

  _isOpen = false;

  ////    LIFE CYCLE    ////

  constructor(elementRef: ElementRef, private injector: Injector) {
    this.hostElement = elementRef.nativeElement;
  }

  ngOnInit() {
    this.modalService = this.injector.get<ModalService>(ModalService);
    this.updateContent();
  }

  ////   EVENTS    ////

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isOpen) 
      this.saveAndClose();
  }

  @HostListener('click', ['$event'])
  closeFromBlur(event: MouseEvent) {
    if (event.target === event.currentTarget && this.isOpen) 
      this.saveAndClose();
  }

  ////    FUNCTIONS    ////

  open() {
    this.isOpen = true;
  }

  saveAndClose() {
    this.isOpen = false;
  }

  updateContent() {
    if (!this.isOpen) {
      this.hostElement.classList.add('hidden');
      document.body.style.overflow = '';
    } else {
      this.hostElement.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  ////    GETTERS & SETTERS    ////

  get isOpen() {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
    this.updateContent();
  }
}
