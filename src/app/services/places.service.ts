import { Injectable } from '@angular/core';
import { Place } from 'src/models/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [];

  addPlace(place: Place) {
    this.places.push(place);
  }

  importPlaces(places: Place[]) {
    this.places.push(...places);
  }

  getPlaces() {
    return this.places;
  }
}
