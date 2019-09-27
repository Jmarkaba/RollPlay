import { Money, Weapon, Armor, Inventory } from '../models/inventory.model';
import { Ability } from 'src/common/models/ability.model';
import { Character, BasicInfo } from "src/common/models/character.model";

import { AbilityType } from 'src/common/enums/character-types';


/**
 * Inventory
 */
export const TestMoney: Money = {
    gold: 200,
    silver: 0,
}
export const TestWeapon: Weapon = { 
    name: 'sword', 
    description: 'A shortsword', 
    damage_roll: '3d6', 
    bonus_damage: 5,
    penetration: 2,
};
export const TestArmor: Armor = {
    name: 'leather armor',
    description: 'Basic leather armor',
    armor_class: 2,
    selling_price: { gold: 22 }
};
export const TestInventory: Inventory = {
    money: TestMoney,
    items: [
        { name: 'apple', description: 'A delicious red apple', quantity: 3 },
        { name: 'shovel', description: 'For digging', quantity: 1}
    ],
    weapons: [TestWeapon],
    armor: [TestArmor]
};

/**
 * Ability
 */
export const TestAbilities: Ability[] = [
    { name: 'Strength', type: AbilityType.PASSIVE, description: 'Makes you stronger' },
    { 
        name: 'Shields', type: AbilityType.SKILL, description: 'Temporarily increases your health', 
        //effects: [
        //    { value: 'current_hp', change: 10, duration: 10 } 
        //]
    }
];

/**
 * Basic Info
 */
export const TestInfo: BasicInfo = {
    name: 'Testies Tester',
    class: 'Warlock',
    race: 'Human',
    level: 2,
    experience: 100,
    xp_to_next_level: 300,
    stats: [
        {name: 'strength', value: 10, modifier: 2},
        {name: 'constitution', value: 5, modifier: -1}   
    ]
}

/**
 * Character(s)
 */
export const TestCharacter: Character = {
    info: TestInfo,
    hitpoints: {current: 20, max: 36},
    crit_hp: {current: 5, max: 5},
    inventory: TestInventory,
    abilities: TestAbilities,
    attributes: {
        initiative: 1,
        move: 4,
        dodge: 2
    }
};
