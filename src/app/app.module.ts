import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { OptionModalComponent } from './components/option-modal/option-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CharacterComponent,
    HeaderComponent,
    OptionModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
