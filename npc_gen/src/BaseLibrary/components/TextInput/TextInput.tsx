import styled from 'styled-components'
import { columbiaBlue, onahauGreen } from '../../styles/colors';

export const StyledTextInput = styled.input`
    border: none;
    border-bottom: 2px solid ${onahauGreen};
    font-family: 'Arima Madurai', cursive;
    outline: none;
    shadow: 0;
    margin: 10px;
    width: 25%;
    &:hover,
    &:focus {
        border-color: ${columbiaBlue};
    }
`;