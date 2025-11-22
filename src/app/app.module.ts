import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { TrackerCharacterComponent } from './components/tracker-character/tracker-character.component';
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
import { StatBlockComponent } from './components/stat-block/stat-block.component';
import { StatblockFormComponent } from './components/statblock-form/statblock-form.component';
import { PlaceFormComponent } from './components/place-form/place-form.component';
import { PlaceComponent } from './components/place/place.component';
import { DescriptionComponent } from './components/description/description.component';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { SpectateComponent } from './pages/spectate/spectate.component';
import { CharacterSheetsComponent } from './pages/character-sheets/character-sheets.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { ToggleGroupComponent } from './components/toggle-group/toggle-group.component';
import { SelectModule } from './components/select/select.module';


@NgModule({
    declarations: [
        AppComponent,
        BoardComponent,
        TrackerCharacterComponent,
        HeaderComponent,
        OptionModalComponent,
        RollInitiativeComponent,
        WorldIndexComponent,
        InitiativeHeaderComponent,
        IndexHeaderComponent,
        SpellCardComponent,
        ModalWrapperComponent,
        StatBlockComponent,
        StatblockFormComponent,
        PlaceFormComponent,
        PlaceComponent,
        DescriptionComponent,
        MarkdownPipe,
        SpectateComponent,
        CharacterSheetsComponent,
        SvgIconComponent,
        ToggleGroupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        SelectModule
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
