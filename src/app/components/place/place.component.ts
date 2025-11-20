import { Component, Input } from '@angular/core';
import { Place } from 'src/models/place';

@Component({
    selector: 'app-place',
    templateUrl: './place.component.html',
    styleUrls: ['./place.component.scss'],
    standalone: false
})
export class PlaceComponent {
  @Input() place: Place;
}
