import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'abbr'
})
export class AbbreviatePipe implements PipeTransform {
    transform(value: string, length: number = 3) {
        return value.substr(0, length);
    }
}