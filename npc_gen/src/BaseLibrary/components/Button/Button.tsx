import styled from 'styled-components';
import { onahauGreen, pictonBlue } from '../../styles/colors';

export const StyledButton = styled.button`
    border-radius: 3px;
    border: 1px solid ${onahauGreen};
    background-color: ${onahauGreen};
    shadow: 0;
    outline: none;
    padding: 10px;
    font-family: 'Arima Madurai', cursive;
    &:hover,
    &:focus {
        background-color: ${pictonBlue};
        border-color: ${pictonBlue};
    }
`;