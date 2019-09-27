import { Inventory } from './inventory.model';
import { Ability } from './ability.model';


interface Fractional {
    current: number;
    max: number;
}
export type Health = Fractional;
export type Mana = Fractional;

export interface CharacterStat {
    name: string, 
    value: number, 
    modifier: number
}
export interface BasicInfo {
    name: string;
    level: number;
    experience: number;
    xp_to_next_level: number;
    class?: string;
    race?: string;
    gender?: string;
    age?: number;
    height?: number;
    weight?: number;
    vision?: string;
    deity?: string;
    stats: CharacterStat[];
    bio?: string;
}

export interface Character {
    id?: string;
    info: BasicInfo;
    image?: string | Blob;
    hitpoints: Health;
    crit_hp: Health;
    mana?: Mana;
    inventory: Inventory;
    attributes: Object;
    abilities: Ability[];
    notes?: string;
}
