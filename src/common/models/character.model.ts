import { Inventory } from './inventory.model';
import { Ability } from './ability.model';


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
    stats: {name: string, value: number, modifier: number}[];
    bio?: string;
}


export interface Character {
    id?: string;
    info: BasicInfo;
    current_hp: number;
    max_hp: number;
    current_crit_hp?: number;
    max_crit_hp?: number;
    inventory: Inventory;
    attributes: Object;
    abilities: Ability[];
    notes?: string;
}
