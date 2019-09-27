import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Game } from 'src/common/models/game.model';
import { urls } from 'src/environments/environment';


@Injectable()
export class GameService {

    private currentGameId: string;
    private currentGame: Game;

    public gameEntered: EventEmitter<String> = new EventEmitter();

    constructor(private httpService: HttpClient) {}

    getGame(game_id: string): void {
        const url = urls.getGameFromIdUrl(game_id);
        this.httpService.get<Game>(url)
            .subscribe((response) => {
               this.currentGameId = game_id;
               this.currentGame = response
               this.gameEntered.emit(game_id);
           },
           (error) => console.log(error));
    }


}