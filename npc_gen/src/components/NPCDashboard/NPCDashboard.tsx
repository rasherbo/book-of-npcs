import React, { FC } from 'react';
import { LinkContainer, NavContainer, NavLinksContainer, TitleContainer } from '../../BaseLibrary/components/NavBar/NavBar';

export const NPCDashboard:FC = () => {
    return (
        <NavContainer>
            <TitleContainer>Book of NPC's</TitleContainer>
            <NavLinksContainer>
                <LinkContainer to='/'>Home</LinkContainer>
                <LinkContainer to='/search'>Search</LinkContainer>
            </NavLinksContainer>
        </NavContainer>
    );
};