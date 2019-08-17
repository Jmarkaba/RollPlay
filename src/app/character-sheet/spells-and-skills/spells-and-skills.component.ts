import { Component, Input, OnInit } from "@angular/core";
import { Ability } from 'src/common/models/ability.model';

@Component({
    selector: 'cs-skills-and-spells',
    templateUrl: './spells-and-skills.component.html',
    styleUrls: ['./spells-and-skills.component.scss']
})
export class SkillsAndSpellsComponent implements OnInit {

    @Input('abilities') abilities: Ability[];

    constructor() {}

    ngOnInit() {
        this.abilities.sort((a: Ability, b: Ability) =>  a.type < b.type ? -1 : 1);
    }
}