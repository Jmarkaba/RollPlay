export interface Money {
    gold?: number;
    silver?: number;
    copper?: number;
}

export interface Item {
    name: string;
    description: string;
    quantity?: number;
    buying_price?: Money;
    selling_price?: Money;
}
export interface Weapon extends Item {
    damage_roll: string;
    bonus_damage: number;
    penetration: number;
}
export interface Armor extends Item {
    armor_class: number;
    magic_armor?: number;
}
export interface Inventory {
    money: Money;
    items: Item[];
    weapons: Weapon[];
    armor: Armor[];
}
