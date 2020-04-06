import { Component, Input, OnInit } from "@angular/core";
import { Ability } from 'src/common/models/ability.model';
import { state, trigger, transition, style, animate } from '@angular/animations';


@Component({
    selector: 'cs-skills-and-spells',
    templateUrl: './spells-and-skills.component.html',
    styleUrls: ['./spells-and-skills.component.scss'],
    animations: [
        trigger('detailExpand', [
          state('collapsed', style({height: '0px', minHeight: '0'})),
          state('expanded', style({height: '*'})),
          transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})
export class SkillsAndSpellsComponent implements OnInit {

    @Input('abilities') abilities: Ability[];

    public columns: string[];
    public expandedElement: Ability | null = null;

    constructor() {}

    ngOnInit() {
        this.abilities.sort((a: Ability, b: Ability) =>  a.type < b.type ? -1 : 1);
        this.columns = ['type', 'name']
    }

    toggleExpansion(item: Ability): void {
        this.expandedElement = this.expandedElement == item ? null : item;
    }
}