import React from 'react';
import { ListFormat } from 'typescript';

export type Race = {
    index: String,
    name: String,
    speed: number,
    ability_bonuses: Array<AbilityBonus>,
    age: String,
    alignment: String,
    size: String,
    size_description: String,
    starting_proficiencies: Array<Generic>,
    languages: Array<Generic>,
    language_desc: String,
    traits: Array<Generic>,
    subraces: Array<Generic>,
    url: String,
};

export type AbilityBonus = {
    ability_score: Generic,
    bonus: number,
};

export type Generic = {
    index: String,
    name: String,
    url: String,
};
