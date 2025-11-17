import { Injectable } from '@angular/core';
import { Place } from 'src/models/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [];

  constructor() {
    const savedPlaces = JSON.parse(localStorage.getItem('index:places'));
    if (savedPlaces) this.importPlaces(savedPlaces);
  }

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
