import { Component, Input } from "@angular/core";
import { Health, Mana } from 'src/common/models/character.model';

export interface TokenData {
    name: string;
    image: string | Blob;
    health: Health;
    mana?: Mana;
};

@Component({
    selector: 'bg-token',
    templateUrl: './token.component.html',
    styleUrls: ['./token.component.scss']
})
export class TokenComponent {

    @Input('size') size: number;
    @Input('data') data: TokenData;

    constructor() {}
}