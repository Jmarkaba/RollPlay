import { Component, Input } from "@angular/core";
import { Inventory } from 'src/common/models/character';


@Component({
    selector: 'cs-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

    @Input('inventory') private inventory: Inventory;

    constructor() {}

}
