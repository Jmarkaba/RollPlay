import { Component, Input } from "@angular/core";
import { TokenData } from '../token/token.component';


@Component({
    selector: 'board-tile',
    templateUrl: './board-tile.component.html',
    styleUrls: ['./board-tile.component.scss']
})
export class BoardTileComponent {

    @Input('size') size;

    @Input() x: number;
    @Input() y: number;

    public currentToken: TokenData;
    public disabled: Boolean = false;

    constructor() {}

    get empty(): boolean {
        return Boolean(this.currentToken);
    }

    /**
     * Returns whether the tile is reachable from another
     * @param move : the maximum possible movement in the turn
     * @param currentX : the x of the token's current tile
     * @param currentY : the y of the token's current tile
     * @param override : boolean specifying whether to override the value of the other parameters
     */
    public isReachable(move: number, currentX: number, currentY: number, override?: boolean): boolean {
        if(this.disabled) return false;
        
        const movement = Math.abs(currentX - this.x) + Math.abs(currentY - this.y);
        return override ? override : movement <= move;
    }

    public setToken(token: TokenData) {
        this.currentToken = token;
        console.log(this.currentToken);
    }

    /**
     * Renders the tile unreachable and unclickable
     */
    public disable(): void {
        this.disabled = true;
    }

    /**
     * Remove any tokens on this tile.
     * If there is any drawings it will clear those too.
     */
    public clear(): void {
        this.currentToken = null;
    }
}