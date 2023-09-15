import styled from "styled-components";
import { CardStylesProps } from "./types";

export const Container = styled.div<CardStylesProps>`
    max-width:${({cardtype}) => cardtype === 'BigCard' ? '49.5%' : '24%'};
    height: auto;
    width: 100%;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 924px) {
        max-width:${({cardtype}) => cardtype === 'BigCard' ? '100%' : '49.5%'};
    }

    @media (max-width: 576px) {
        max-width: 100%;
    }
`

export const Wrapper = styled.div<CardStylesProps>`
    position: relative;
    height: ${({cardtype}) => cardtype === 'BigCard' ? '20rem' : '13rem'};
    overflow: hidden;
    &::before { 
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgb(0 0 0 / 43%);
        z-index: 1;
    } 
    
    @media (max-width: 576px) {
        height: 13rem;
    }
`

export const BackgroundImage = styled.div<CardStylesProps>`
    background-image:${({ datacard }) => `url(${datacard?.image})`};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const Information = styled.div<CardStylesProps>`
    position: ${({cardclass}) => cardclass !== 'card' ? 'absolute' : 'static'};
    bottom: 20px;
    z-index: 3;

    @media (max-width: 1024px) {
        bottom: 10px;
    }
`