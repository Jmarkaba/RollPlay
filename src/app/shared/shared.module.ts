import { NgModule } from "@angular/core";

// Pipes
import { KeyToNamePipe } from './pipes/key-to-name.pipe';
import { FillValuePipe } from './pipes/fill-value.pipe';
import { AbbreviatePipe } from './pipes/abbreviate.pipe';

// Services
import { DiceRollerService } from './services/dice-roller.service';


@NgModule({
    imports: [],
    declarations: [
        KeyToNamePipe,
        FillValuePipe,
        AbbreviatePipe
    ],
    providers: [
        DiceRollerService
    ],
    exports: [
        KeyToNamePipe,
        FillValuePipe,
        AbbreviatePipe
    ]
})
export class SharedModule { }