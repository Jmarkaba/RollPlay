import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BasicInfo } from 'src/common/models/character.model';
import { DiceRollerService } from 'src/app/shared/services/dice-roller.service';

@Component({
    selector: 'cs-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {

    @Input('info') info: BasicInfo;

    @Output('roll') diceRoll: EventEmitter<any>;

    constructor(
        private diceService: DiceRollerService
    ) {}

    rollStat(modifier: number) {
        const mod: number = modifier ? modifier : 0;
        const result = this.diceService.roll(20) + mod;
        console.log(result);
        this.diceRoll.emit({for: 'Strength', val: result});
    }
}