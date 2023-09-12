import styled from "styled-components";
import { CardStylesProps } from "../../types";

export const TitleInner = styled.div<CardStylesProps>`
    padding: 10px;
`

export const TitleText = styled.h3<CardStylesProps>`
    color: ${({cardclass}) => cardclass === 'card' ? '#000' : '#fff'};
    font-size: ${({cardtype}) => cardtype === 'BigCard' ? '25px' : '17px'};
    font-weight: 700;
`