import styled from "styled-components";
import { CardStylesProps } from "../../types";

export const TitleInner = styled.div<CardStylesProps>`
    padding: ${({ cardclass }) => cardclass === 'card' ? '10px 0' : '5px 15px'};
`

export const TitleText = styled.h3<CardStylesProps>`
    color: ${(props) => props.cardclass !== 'card' ? '#fff' :
        props.themestyles?.color};
    font-size: ${({ cardtype }) => cardtype === 'BigCard' ? '25px' : '17px'};
    font-weight: 700;
    overflow-wrap: anywhere;

    @media (max-width: 576px) {
        font-size: 18px;
    }

    @media (max-width: 320px) {
        font-size: 16px;
    }
`