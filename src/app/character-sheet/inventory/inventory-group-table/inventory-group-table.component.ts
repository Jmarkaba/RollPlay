import { Component, Input, OnInit } from "@angular/core";
import { Item } from 'src/common/models/character';
import { state, trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'cs-inventory-group',
    templateUrl: './inventory-group-table.component.html',
    styleUrls: ['./inventory-group-table.component.scss'],
    animations: [
        trigger('detailExpand', [
          state('collapsed', style({height: '0px', minHeight: '0'})),
          state('expanded', style({height: '*'})),
          transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})
export class InventoryGroupTableComponent implements OnInit{

    @Input('title') title: String;
    @Input('groupData') private groupData: Item[];


    public expandedElement: Item | null = null;
    public columns: string[] = ['name'];
    public columnsToDisplay: string[];

    constructor() {}

    ngOnInit() {
        this.groupData.sort(this.compareItems);
        if(this.title === 'Weapons')
            this.columns = ['name', 'damage_roll', 'bonus_damage', 'penetration'];
        else if(this.title === 'Armor')
            this.columns = ['name', 'armor_class', 'magic_armor'];
        this.columnsToDisplay = this.columns.concat(['quantity','delete']);
    }

    get icon(): string {
        switch(this.title) {
            case 'Weapons': return 'fa-hammer';
            case 'Armor': return 'fa-shield-alt';
            default: return 'fa-journal-whills'
        }
    }

    compareItems(a: Item, b: Item): -1 | 1 {
        return a.name < b.name ? -1 : 1;
    }

    update(index: number, key: string, event: any): void {
        if(true || event.key === 'Enter') {
            const val = event.target.textContent.trim();
            this.groupData[index][key] = val;
            event.stopPropagation();
        }
    }

    toggleExpansion(item: Item): void {
        this.expandedElement = this.expandedElement == item ? null : item;
    }
}
