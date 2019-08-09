import { NgModule } from "@angular/core";
import { MDBBootstrapModule, IconsModule } from 'angular-bootstrap-md';
import { MatTabsModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular//platform-browser/animations';

import { CharacterSheetComponent } from './character-sheet.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryGroupTableComponent } from './inventory/inventory-group-table/inventory-group-table.component';


@NgModule({
    imports: [
        MatTabsModule,
        BrowserAnimationsModule,
        IconsModule,
        MatExpansionModule,
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
