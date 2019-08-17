import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DiceRollerService {

    constructor() {}

    public roll(d: number): number {
        return (d <= 0) 
            ? 0
            : Math.round(Math.random()) * d;
    }

    public rollDice(ntimes: number, d: number): number {
        let result = 0;
        for (let index = 0; index < ntimes; index++) {
            result += this.roll(d);
        }
        return result;
    }
}