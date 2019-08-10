import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keyToName'
})
export class KeyToNamePipe implements PipeTransform {
    transform(value: string) {
        return value.split('_').join(' ');
    }
}