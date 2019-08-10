import { NgModule } from "@angular/core";
import { MaterialModule } from '../naterial.module';
import { MDBBootstrapModule, IconsModule } from 'angular-bootstrap-md';

import { CharacterSheetComponent } from './character-sheet.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryGroupTableComponent } from './inventory/inventory-group-table/inventory-group-table.component';



@NgModule({
    imports: [
        MaterialModule,
        IconsModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        InventoryComponent,
        InventoryGroupTableComponent,
        CharacterSheetComponent
    ],
    exports: [
        CharacterSheetComponent
    ],
    bootstrap: [CharacterSheetComponent]
})
export class CharacterSheetModule {}
