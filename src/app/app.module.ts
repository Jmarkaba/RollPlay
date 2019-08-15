import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';
import { GameBoardModule } from './game-board/game-board.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CharacterSheetModule,
    GameBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
