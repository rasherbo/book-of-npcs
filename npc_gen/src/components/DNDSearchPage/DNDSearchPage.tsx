import React, { FC, useState } from 'react';
import { StyledTextInput } from '../../BaseLibrary/components/TextInput/TextInput';
import styled from 'styled-components';
import { L2, P1 } from '../../BaseLibrary/components/Typography/Typography';
import { StyledOption, StyledSelect } from '../../BaseLibrary/components/DropDown/DropDown';
import { StyledButton } from '../../BaseLibrary/components/Button/Button';
import { raceToString } from '../../BaseLibrary/utils/Serializers';
import { Race } from '../../BaseLibrary/utils/Types';

const StyledSearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DNDSearchPage:FC = () => {

    const [ results, setResults ] = useState<Race>();
    const [ item, setItem ] = useState<String>();
    const [ category, setCategory ] = useState<String>();

    const queryApi = () => {
        fetch('https://www.dnd5eapi.co/api/' + category + '/' + item?.toLowerCase(),
            {
                headers: {
                'Content-Type': 'application/json',
                },
                method: 'GET',
        },)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setResults(res);
        });
    };

    return (
        <>
            <StyledSearchBarContainer>
                <L2>Search the Compendium!</L2>
            </StyledSearchBarContainer>
            <StyledSearchBarContainer>
                <StyledSelect onChange={(e) => setCategory(e.target.value)}>
                    <StyledOption value="" disabled selected>Category</StyledOption>
                    <StyledOption value='ability-scores'>Ability Scores</StyledOption>
                    <StyledOption value='alignments'>Alignments</StyledOption>
                    <StyledOption value='backgrounds'>Backgrounds</StyledOption>
                    <StyledOption value='languages'>Languages</StyledOption>
                    <StyledOption value='proficiencies'>Proficiencies</StyledOption>
                    <StyledOption value='skills'>Skills</StyledOption>
                    <StyledOption value='classes'>Classes</StyledOption>
                    <StyledOption value='conditions'>Conditions</StyledOption>
                    <StyledOption value='damage-types'>Damage Types</StyledOption>
                    <StyledOption value='magic-schools'>Magic Schools</StyledOption>
                    <StyledOption value='equipment'>Equipment</StyledOption>
                    <StyledOption value='weapon-properties'>Weapon Properties</StyledOption>
                    <StyledOption value='feats'>Feats</StyledOption>
                    <StyledOption value='features'>Features</StyledOption>
                    <StyledOption value='races'>Races</StyledOption>
                    <StyledOption value='spells'>Spells</StyledOption>
                    <StyledOption value='subclasses'>Subclasses</StyledOption>
                    <StyledOption value='subraces'>Subraces</StyledOption>
                    <StyledOption value='traits'>Traits</StyledOption>
                </StyledSelect>
                <StyledTextInput 
                    placeholder='Search'
                    onChange={(e) => setItem(e.target.value)}
                />
                <StyledButton onClick={() => queryApi()}>Submit</StyledButton>
            </StyledSearchBarContainer>
            <StyledSearchBarContainer>
                <P1>
                    {results ? raceToString(results) : "banana"}
                </P1>
            </StyledSearchBarContainer>
        </>
    );
}