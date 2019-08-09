import { AbilityType } from 'src/common/enums/character-types';
import { 
    Character, 
    Inventory, 
    Ability, 
    Weapon, 
    Armor 
} from "src/common/models/character";

const TestWeapon: Weapon = { 
    name: 'sword', 
    description: 'A shortsword', 
    damage_roll: '3d6', 
    bonus_damage: 5,
    penetration: 2,
};
const TestArmor: Armor = {
    name: 'leather armor',
    description: 'Basic leather armor',
    armor_class: 2,
    selling_price: 22
};
export const TestInventory: Inventory = {
    gold: 200,
    items: [
        { name: 'apple', description: 'A delicious red apple', quantity: 3 },
        TestWeapon,
        TestArmor,
        { name: 'shovel', description: 'For digging', quantity: 1}
    ]
};
const TestAbilities: Ability[] = [
    { name: 'Strength', type: AbilityType.PASSIVE, description: 'Makes you stronger' }
];
export const TestCharacter: Character = {
    name: 'Testies Tester',
    class: 'Warlock',
    race: 'Human',
    level: 2,
    experience: 100,
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
