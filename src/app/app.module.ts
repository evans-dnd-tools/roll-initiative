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
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { CharacterExportComponent } from './components/character-export/character-export.component';
import { CharacterImportComponent } from './components/character-import/character-import.component';
import { PlaceFormComponent } from './components/place-form/place-form.component';
import { PlaceComponent } from './components/place/place.component';
import { DescriptionComponent } from './components/description/description.component';
import { MarkdownPipe } from './pipes/markdown.pipe';


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
    ModalWrapperComponent,
    CharacterSheetComponent,
    CharacterFormComponent,
    CharacterExportComponent,
    CharacterImportComponent,
    PlaceFormComponent,
    PlaceComponent,
    DescriptionComponent,
    MarkdownPipe,
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
