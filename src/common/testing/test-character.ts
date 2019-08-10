import { AbilityType } from 'src/common/enums/character-types';
import { 
    Character, 
    Inventory, 
    Ability, 
    Weapon, 
    Armor, 
    Money
} from "src/common/models/character";

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
    selling_price: 22
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
export const TestAbilities: Ability[] = [
    { name: 'Strength', type: AbilityType.PASSIVE, description: 'Makes you stronger' },
    { name: 'Shields', type: AbilityType.SKILL, description: 'Temporarily increases your health', effects: { current_hp: 10 } }
];
export const TestCharacter: Character = {
    name: 'Testies Tester',
    class: 'Warlock',
    race: 'Human',
    level: 2,
    experience: 100,
    xp_to_next_level: 300,
    current_hp: 20,
    max_hp: 36,
    current_crit_hp: 5,
    max_crit_hp: 5,
    inventory: TestInventory,
    abilities: TestAbilities,
    attributes: {
        initiative: 1,
        move: 4,
        dodge: 2
    }
};
