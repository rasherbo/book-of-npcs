import styled from 'styled-components';
import { peachPuff, pictonBlue, columbiaBlue } from '../../styles/colors';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
    padding: 10px;
    display: flex;
    background-color: ${peachPuff};
    justify-content: space-between;
    align-items: center;
`;

export const TitleContainer = styled.div`
    font-family: 'Arima Madurai', cursive;
    color: ${pictonBlue};
    font-size: 32px;
`;

export const NavLinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LinkContainer = styled(Link)`
    font-family: 'Arima Madurai', cursive;
    color: ${pictonBlue};
    font-size: 24px;
    text-decoration: None;
    padding: 15px;
    &:hover,
    &:active {
        color: ${columbiaBlue};
    }
`;