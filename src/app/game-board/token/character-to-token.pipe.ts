import { Pipe, PipeTransform } from "@angular/core";
import { Character } from 'src/common/models/character.model';
import { TokenData } from './token.component';


@Pipe({
    name: 'tokenify'
})
export class CharacterToTokenPipe  implements PipeTransform {

    private defaultTokenImage = 'assets/male_captain_sword.png';

    constructor() {}

    transform(character: Character): TokenData {
        const token: TokenData = {
            name: character.info.name,
            image: character.image || this.defaultTokenImage,
            health: character.hitpoints,
            mana: character.mana
        };
        return token;
    }

}
