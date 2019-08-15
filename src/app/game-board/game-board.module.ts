import { NgModule } from "@angular/core";

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { TestComponent as TokenComponent } from './token/token.component';
import { BoardTileComponent } from './board-tile/board-tile.component';
import { GameBoardComponent } from './game-board.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        TokenComponent,
        BoardTileComponent,
        GameBoardComponent
    ],
    imports: [
        BrowserModule,
        SharedModule
    ],
    providers: [],
    exports: [
        GameBoardComponent
    ]
})
export class GameBoardModule {}