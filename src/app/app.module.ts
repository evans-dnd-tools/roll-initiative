import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { OptionModalComponent } from './components/option-modal/option-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { RollInitiativeComponent } from './pages/roll-initiative/roll-initiative.component';
import { WorldIndexComponent } from './pages/world-index/world-index.component';
import { InitiativeHeaderComponent } from './components/initiative-header/initiative-header.component';
import { IndexHeaderComponent } from './components/index-header/index-header.component';
import { SpellCardComponent } from './components/spell-card/spell-card.component';
import { BaseModalComponent } from './components/base-modal/base-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CharacterComponent,
    HeaderComponent,
    OptionModalComponent,
    RollInitiativeComponent,
    WorldIndexComponent,
    InitiativeHeaderComponent,
    IndexHeaderComponent,
    SpellCardComponent,
    BaseModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
