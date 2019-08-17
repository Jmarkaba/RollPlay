import { AbilityType, RegenType } from 'src/common/enums/character-types';

export interface Regen {
    type: RegenType,
    length?: number;
}
export interface Effect {
    prop: string;
    change: number;
    duration: number; // in turns
}
export interface Ability {
    name: string;
    active?: boolean;
    type: AbilityType;
    description: string;
    regen?: Regen;
    targets?: string[];
    self_effects?: Effect[];
    target_effects?: Effect[];
}