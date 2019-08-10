import { AbilityType, RegenType } from '../enums/character-types';

export interface Money {
    gold?: number;
    silver?: number;
    copper?: number;
}

export interface Item {
    name: string;
    description: string;
    quantity?: number;
    buying_price?: number;
    selling_price?: number;
}
export interface Weapon extends Item {
    damage_roll: string;
    bonus_damage: number;
    penetration: number;
}
export interface Armor extends Item {
    armor_class: number;
}
export interface Inventory {
    money: Money;
    items: Item[];
    weapons: Weapon[];
    armor: Armor[];
}


export interface Regen {
    type: RegenType,
    length?: number;
}
export interface Ability {
    name: string;
    type: AbilityType;
    description: string;
    regen?: Regen;
    effects?: Object;
}


export interface Character {
    name: string;
    class?: string;
    race?: string;
    level: number;
    experience: number;
    current_hp: number;
    max_hp: number;
    current_crit_hp?: number;
    max_crit_hp?: number;
    inventory: Inventory;
    attributes: Object;
    abilities: Ability[];
    notes?: string;
}
