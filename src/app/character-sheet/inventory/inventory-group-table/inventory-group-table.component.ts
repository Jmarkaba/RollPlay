import { Component, Input, OnInit } from "@angular/core";
import { Item } from 'src/common/models/character';

@Component({
    selector: 'cs-inventory-group',
    templateUrl: './inventory-group-table.component.html',
    styleUrls: ['./inventory-group-table.component.scss']
})
export class InventoryGroupTableComponent implements OnInit{

    @Input('groupData') private groupData: Item[];
    private selected: number = null;

    constructor() {}

    ngOnInit() {
        this.groupData.forEach(item => item.quantity = item.quantity ? item.quantity : 1);
        this.groupData.sort(this.compareItems);
    }

    compareItems(a: Item, b: Item) {
        return a.name < b.name ? -1 : 1;
    }

    update(index: number, key: string, event: any) {
        if(true || event.key === 'Enter') {
            const val = event.target.textContent;
            this.groupData[index][key] = val;
            event.stopPropagation();
        }
    }

    toggleExpansion(index: number) {
        this.selected = this.selected === index 
                        ? null
                        : index;
    }
}
