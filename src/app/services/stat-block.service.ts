import { Injectable } from '@angular/core';
import { StatBlock } from 'src/models/stat-block';

@Injectable({
  providedIn: 'root'
})
export class StatBlockService {

  private statblocks : StatBlock[] = [];

  constructor() {
    const savedCharacters = JSON.parse(localStorage.getItem('index:characters'));
    if (savedCharacters) this.importStatBlocks(savedCharacters);
  }

  addStatBlock(element: StatBlock) {
    this.statblocks.push(element);
  }

  importStatBlocks(elements: any[]) {
    for (let element of elements) {
      this.statblocks.push(new StatBlock(element));
    }
  }

  getStatBlocks() {
    return this.statblocks;
  }

  getStatBlock(id: number) {
    return this.statblocks[id];
  }

  updateStatBlock(id: number, element: StatBlock) {
    this.statblocks[id] = element;
  }

  deleteStatBlock(id: number) {
    this.statblocks.splice(id, 1);
  }
}
