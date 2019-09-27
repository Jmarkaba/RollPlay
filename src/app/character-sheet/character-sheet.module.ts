import { NgModule } from "@angular/core";

// Modules
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Components
import { CharacterSheetComponent } from './character-sheet.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryGroupTableComponent } from './inventory/inventory-group-table/inventory-group-table.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { SkillsAndSpellsComponent } from './spells-and-skills/spells-and-skills.component';



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
        SkillsAndSpellsComponent,
        CharacterSheetComponent
    ],
    exports: [
        CharacterSheetComponent
    ],
    bootstrap: [CharacterSheetComponent]
})
export class CharacterSheetModule {}
