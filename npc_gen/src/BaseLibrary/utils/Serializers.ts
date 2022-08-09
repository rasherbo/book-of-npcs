import { Race } from "./Types";


export const raceToString = (race: Race) => {
    return `
        ${race.name}\n
        Speed: ${race.speed}\n
        Ability Bonus: ${race.ability_bonuses.map((item) => `${item.ability_score.name} (${item.bonus}), `)}\n
        Age: ${race.age}\n
        Alignment: ${race.alignment}\n
        Size: ${race.size} \n${race.size_description}\n
        Proficiencies: ${race.starting_proficiencies.map((item) => `${item.name}`)}\n
        Languages: ${race.languages.map((item) => `${item.name}, `)}\n
        ${race.language_desc}\n
        Traits: ${race.traits.map((item) => `${item.name}, `)}\n
        SubRaces: ${race.subraces.map((item) => `${item.name}, `)}\n
    `;
};