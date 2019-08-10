import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../naterial.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CharacterSheetComponent } from './character-sheet.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryGroupTableComponent } from './inventory/inventory-group-table/inventory-group-table.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';



@NgModule({
    imports: [
        SharedModule,
        MaterialModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        BasicInfoComponent,
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
