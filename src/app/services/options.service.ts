import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  saveOptions: boolean = true;
  saveTeam: boolean = false;
  groupTurnByTeam: boolean = false;

  constructor() {
    const options = localStorage.getItem('options');

    if (options == null) return; // No options saved
    if (options === "👎") {
      this.saveOptions = false;
      return;
    }

    this.saveTeam = options.includes('saveTeam');
    this.groupTurnByTeam = options.includes('groupTurnByTeam');
   }

   save(saveOptions: boolean, saveTeam: boolean, groupTurnByTeam: boolean) {
    this.saveOptions = saveOptions;
    this.saveTeam = saveTeam;
    this.groupTurnByTeam = groupTurnByTeam;

    let options = "👎";

    if (this.saveOptions) {
      options = "";
      if (this.saveTeam) options += "saveTeam";
      if (this.groupTurnByTeam) options += "groupTurnByTeam";
    }

    localStorage.setItem('options', options);
   }

   emptyCache() {
    localStorage.clear();
  }
}
