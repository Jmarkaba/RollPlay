import { NgModule } from "@angular/core";

// Pipes
import { KeyToNamePipe } from './pipes/key-to-name.pipe';
import { FillValuePipe } from './pipes/fill-value.pipe';


@NgModule({
    imports: [],
    declarations: [
        KeyToNamePipe,
        FillValuePipe
    ],
    providers: [],
    exports: [
        KeyToNamePipe,
        FillValuePipe
    ]
})
export class SharedModule { }