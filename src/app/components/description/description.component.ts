import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { IndexElementType } from 'src/models/enums/index-element-type';
import { SpellCardComponent } from '../spell-card/spell-card.component';
import { CharacterSheetComponent } from '../character-sheet/character-sheet.component';
import { PlaceComponent } from '../place/place.component';
import { CharactersSheetService } from 'src/app/services/characters-sheet.service';
import { PlacesService } from 'src/app/services/places.service';
import { ModalService } from 'src/app/services/modal.service';
import { SPELLS } from 'src/app/lists/spells';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements AfterViewInit {

  ////    INPUTS    ////

  @Input()
  description: string = '';

  ////    LIFECYCLE    ////

  constructor(
    private renderer: Renderer2, 
    private element: ElementRef,
    private charactersService: CharactersSheetService,
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

  ////    METHODS    ////

  openReference(type: IndexElementType, name: string) {
    switch(type) {
      case IndexElementType.Spell:
        this.openSpell(name);
        break;
      case IndexElementType.Character:
        this.openCharacter(name);
        break;
      case IndexElementType.Place:
        this.openPlace(name);
        break;
    }
  }

  openSpell(name: string) {

    const spell = SPELLS.find(s => s.name === name);
    if (!spell) return;

    const input = {spell}
    this.modalService.open(SpellCardComponent, input);
  }

  openCharacter(name: string) {

    const character = this.charactersService.getCharacters().find(c => c.name === name);
    if (!character) return;

    const input = {character}
    this.modalService.open(CharacterSheetComponent, input);
  }

  openPlace(name: string) {

    const place = this.placesService.getPlaces().find(p => p.name === name);
    if (!place) return;

    const input = {place}
    this.modalService.open(PlaceComponent, input);
  }
}
