import { Component, Input } from "@angular/core";
import { Inventory } from 'src/common/models/inventory.model';


@Component({
    selector: 'cs-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

    @Input('inventory') inventory: Inventory;

    constructor() {}

}
