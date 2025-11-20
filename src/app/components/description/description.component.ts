import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { IndexElementType } from 'src/models/enums/index-element-type';
import { SpellCardComponent } from '../spell-card/spell-card.component';
import { StatBlockComponent } from '../stat-block/stat-block.component';
import { PlaceComponent } from '../place/place.component';
import { StatBlockService } from 'src/app/services/stat-block.service';
import { PlacesService } from 'src/app/services/places.service';
import { ModalService } from 'src/app/services/modal.service';
import spellsJson from 'src/app/lists/spells.json';
import { Spell } from 'src/models/spell';


@Component({
    selector: 'description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.scss'],
    standalone: false
})
export class DescriptionComponent implements AfterViewInit {
  ////    READONLY    ////

  readonly SPELLS = spellsJson as Spell[];

  ////    INPUTS    ////

  @Input()
  value: string = '';

  @Input()
  editable: boolean = false;

  ////    OUTPUTS    ////

  @Output()
  valueChange = new EventEmitter<string>();

  ////    ATTRIBUTES    ////

  @ViewChild('descriptionHtml') descriptionHtml: ElementRef;
  @ViewChild('descriptionText') descriptionText: ElementRef;

  // Ref autocomplete
  // @ViewChild('refAutocomplete') refAutocomplete: ElementRef;
  // showRefAutocomplete: boolean = false;

  ////    LIFECYCLE    ////

  constructor(
    private renderer: Renderer2, 
    private element: ElementRef,
    private statblocksService: StatBlockService,
    private placesService: PlacesService,
    private modalService: ModalService
  ) {}

  ngAfterViewInit() {
    const descriptionElements = this.element.nativeElement.querySelectorAll('.index-elem-ref');

    for (const element of descriptionElements) {
      this.renderer.listen(element, 'click', (event) => {
        this.openReference(event.target.dataset.type, event.target.dataset.name);
      });
    }
  }

  ////    EVENTS    ////

  // on click on the formatted description, focus the textarea
  // and try to put the cursor at the same position
  // (using a label always put the cursor at the end of the textarea)
  focusTextArea() {
    const selection = window.getSelection();

    const text = selection.anchorNode.textContent;
    const textAfter = text.substring(selection.focusOffset);
    
    const selectionElement = selection.anchorNode.parentElement;
    const descriptionHtmlChildren = this.descriptionHtml.nativeElement.children;

    let lines = 0;
    for(lines; lines < descriptionHtmlChildren.length; lines++)
      if (descriptionHtmlChildren[lines] === selectionElement || descriptionHtmlChildren[lines].contains(selectionElement))
        break;

    const description = (this.descriptionText.nativeElement as HTMLTextAreaElement).value;

    const linesBefore = description.split('\n').slice(0, lines);
    const linesBeforeText = linesBefore.join('\n');

    const start = description.indexOf(text, linesBeforeText.length);
    const position = description.indexOf(textAfter, start);

    this.descriptionText.nativeElement.setSelectionRange(position, position);
    this.descriptionText.nativeElement.focus();
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const descriptionHtml = this.descriptionHtml.nativeElement as HTMLElement;
    const descriptionText = this.descriptionText.nativeElement as HTMLElement;

    if (target === descriptionHtml)
      descriptionText.scrollTop = descriptionHtml.scrollTop;
    else if (target === descriptionText)
      descriptionHtml.scrollTop = descriptionText.scrollTop;
  }

  // onInput(event: Event) {
  //   console.log(event);
  //   if ((event as InputEvent).data !== "@") return;

  //   this.showRefAutocomplete = true;

  //   const input = event.target as HTMLTextAreaElement;
  //   const div = document.createElement('div');

  //   const style = window.getComputedStyle(input);
  //   for (const property of style)
  //     div.style.setProperty(property, style.getPropertyValue(property));
    
  //   div.textContent = input.value.substring(0, input.selectionStart);
  //   const span = document.createElement('span');

  //   div.insertBefore(span, null);
  //   document.body.insertBefore(div, null);

  //   const spanPos = span.getBoundingClientRect(); 

  //   div.remove();

  //   this.refAutocomplete.nativeElement.style.left = spanPos.x - 14 + "px";
  //   this.refAutocomplete.nativeElement.style.top = spanPos.y + 24 + "px";
  // }

  // onKeyDown(event: KeyboardEvent) {
  //   if ((event.key === "Enter" || event.key === "Escape") && this.showRefAutocomplete) {
  //     this.showRefAutocomplete = false;
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  // }

  // onBlur() {
  //   this.showRefAutocomplete = false;
  // }

  ////    METHODS    ////

  openReference(type: IndexElementType, name: string) {
    switch(type) {
      case IndexElementType.Spell:
        this.openSpell(name);
        break;
      case IndexElementType.StatBlock:
        this.openCharacter(name);
        break;
      case IndexElementType.Place:
        this.openPlace(name);
        break;
    }
  }

  openSpell(name: string) {
    const spell = this.SPELLS.find(s => s.name === name);
    if (!spell) return;

    const input = {spell}
    this.modalService.open(SpellCardComponent, input);
  }

  openCharacter(name: string) {
    const character = this.statblocksService.getStatBlocks().find(c => c.name === name);
    if (!character) return;

    const input = {character}
    this.modalService.open(StatBlockComponent, input);
  }

  openPlace(name: string) {
    const place = this.placesService.getPlaces().find(p => p.name === name);
    if (!place) return;

    const input = {place}
    this.modalService.open(PlaceComponent, input);
  }

  ////    GETTERS & SETTERS    ////

  get valueModel() {
    return this.value;
  }

  set valueModel(value: string) {
    this.value = value;
    this.valueChange.emit(value);
  }
}
