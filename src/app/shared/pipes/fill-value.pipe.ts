import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fillval'
})
export class FillValuePipe implements PipeTransform {
    transform(value: any, replaceWith: string = '-') {
        if (value === undefined || value === null)
            return replaceWith;
        else 
            return value;
    }
}