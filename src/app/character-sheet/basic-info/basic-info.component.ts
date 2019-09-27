import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BasicInfo, CharacterStat } from 'src/common/models/character.model';
import { DiceRollerService } from 'src/app/shared/services/dice-roller.service';

interface DiceRollOutput {
    for: string, 
    val: number
}

@Component({
    selector: 'cs-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {

    @Input('info') info: BasicInfo;

    @Output('roll') diceRoll: EventEmitter<DiceRollOutput> = new EventEmitter<DiceRollOutput>();

    constructor(
        private diceService: DiceRollerService
    ) {}

    rollStat(stat: CharacterStat) {
        const mod: number = stat.modifier ? stat.modifier : 0;
        const result = this.diceService.roll(20) + mod;
        const output: DiceRollOutput = {
            for: stat.name,
            val: result
        };
        this.diceRoll.emit(output);
    }
}