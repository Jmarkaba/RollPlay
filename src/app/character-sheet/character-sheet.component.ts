import { Component, ViewChild, OnDestroy } from "@angular/core";
import { Character, Inventory } from 'src/common/models/character';
import { Subscription } from 'rxjs';
import { TestCharacter } from 'src/common/testing/test-character';

@Component({
    selector: 'character-sheet',
    templateUrl: './character-sheet.component.html',
    styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnDestroy {
    private subscribes: Subscription[];
    private character: Character;
    private tabs = [
        {label: 'Basic Info', content: 'THis is number one'},
        {label: 'Inventory', content: 'THis is number one'},
        {label: 'Spells/Skills', content: 'THis is number one'}
    ]

    @ViewChild('characterModal', { static: false }) characterModal;

    constructor() {
        this.character = TestCharacter;
    }
    get name(): string {
        return this.character.name;
    }
    get level(): number {
        return this.character.level;
    }
    get class(): string | boolean {
        return this.character.class || false;
    }
    get race(): string | boolean {
        return this.character.race || false;
    }
    get inventory(): Inventory {
        return this.character.inventory;
    }

    show(): void {
        this.characterModal.show();
    }
    hide(): void {
        this.characterModal.hide();
    }

    ngOnDestroy(): void {
        this.subscribes.forEach(sub => sub.unsubscribe());
    }
}
