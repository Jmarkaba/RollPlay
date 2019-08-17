import { Component, ViewChild, OnDestroy } from "@angular/core";
import { Character } from 'src/common/models/character.model';
import { Inventory } from 'src/common/models/inventory.model';
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

    @ViewChild('characterModal', { static: false }) characterModal;

    constructor() {
        this.character = TestCharacter;
    }
    get name(): string {
        return this.character.info.name;
    }
    get level(): number {
        return this.character.info.level;
    }
    get class(): string | boolean {
        return this.character.info.class || false;
    }
    get race(): string | boolean {
        return this.character.info.race || false;
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
