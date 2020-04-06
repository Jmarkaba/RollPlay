import { AbilityType, RegenType } from 'src/common/enums/character-types';

export interface Regen {
    type: RegenType,
    length?: number;
    remaining: number;
}
export interface Effect {
    prop: string;
    change: number;
    duration: number; // in turns
}
export interface Ability {
    name: string;
    type: AbilityType;
    description: string;
    regen?: Regen;
    self_effects?: Effect[];
    target_effects?: Effect[];
}