import { Character } from './character.model';

export interface InGameLocation {
    name: string;
    image?: string;
    connects_to?: Location[];
}

export interface Game {
    date: Date;
    characters: Character[];
    location: InGameLocation;
    time_elapsed?: number;      // in game days
}