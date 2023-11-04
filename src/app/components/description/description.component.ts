import { AfterViewInit, Component, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements AfterViewInit, OnDestroy {

  ////    INPUTS    ////

  @Input()
  description: string = '';

  ////    ATTRIBUTES    ////

  private removeListeners: () => void;

  ////    LIFECYCLE    ////

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  ngAfterViewInit() {
    const descriptionElement = this.element.nativeElement.querySelector('.index-elem-ref');
    this.renderer.listen(descriptionElement, 'click', (event) => {
      console.log('Clicked inside description');
    });
  }

  ngOnDestroy() {
    if (this.removeListeners) this.removeListeners();
  }
}
