import { NgModule } from "@angular/core";

// Modules
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { PopoverModule, WavesModule } from 'angular-bootstrap-md';


// Components
import { TokenComponent } from './token/token.component';
import { BoardTileComponent } from './board-tile/board-tile.component';
import { GameBoardComponent } from './game-board.component';

@NgModule({
    declarations: [
        TokenComponent,
        BoardTileComponent,
        GameBoardComponent
    ],
    imports: [
        SharedModule,
        BrowserModule,
        PopoverModule,
        WavesModule
    ],
    providers: [],
    exports: [
        GameBoardComponent
    ]
})
export class GameBoardModule {}