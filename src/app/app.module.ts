import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';
import { GameBoardModule } from './game-board/game-board.module';

import { AppComponent } from './app.component';
import { FrontPageComponent, ClickStopPropagation } from './front-page/front-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ClickStopPropagation
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    CharacterSheetModule,
    GameBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent, FrontPageComponent]
})
export class AppModule { }
