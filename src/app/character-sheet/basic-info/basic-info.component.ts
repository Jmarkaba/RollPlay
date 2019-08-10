import { Component, Input } from '@angular/core';
import { Character } from 'src/common/models/character';


@Component({
    selector: 'cs-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {

    @Input('character') character: Character;

    constructor() {}

}