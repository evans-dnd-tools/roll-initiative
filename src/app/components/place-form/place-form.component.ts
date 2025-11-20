import { Component } from '@angular/core';
import { MarkdownService } from 'src/app/services/markdown.service';
import { ModalService } from 'src/app/services/modal.service';
import { PlacesService } from 'src/app/services/places.service';
import { IndexElementType } from 'src/models/enums/index-element-type';
import { PlaceType } from 'src/models/enums/place-type';
import { Place } from 'src/models/place';

@Component({
    selector: 'app-place-form',
    templateUrl: './place-form.component.html',
    styleUrls: ['./place-form.component.scss'],
    standalone: false
})
export class PlaceFormComponent {

  ////    READ-ONLY    ////

  readonly PLACE_TYPES = PlaceType;

  ////    ATTRIBUTES    ////

  place: Place = {
    type: IndexElementType.Place,
    name: "",
    placeType: null,
    description: ""
  };

  description: string = "";

  ////    CONSTRUCTOR    ////

  constructor(
    private modalService: ModalService, 
    private markdownService: MarkdownService,
    private placesService: PlacesService
  ) { }

  ////    INPUT EVENTS    ////

  checkInput(event: InputEvent) {
    const validInputTypes = ['insertText', 'deleteContentBackward', 'deleteContentForward', 'deleteByCut', 'insertFromPaste'];
    if (!validInputTypes.includes(event.inputType)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  updateName(event: Event) {
    const name = (event.target as HTMLElement).innerText;
    this.place.name = name;
  }

  updateDescription() {
    this.description = this.markdownService.markdownToHtml(this.place.description);
  }

  submit() {
    this.placesService.addPlace(this.place);

    setTimeout(() => {
      this.modalService.close();
    }, 80);
  }
}
