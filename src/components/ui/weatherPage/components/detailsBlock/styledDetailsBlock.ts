import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Container = styled.div<ThemeStyledProps>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    row-gap: 40px;
    column-gap: 50px;
    background-color: ${({ themestyles }) => themestyles.backgroundForecastBlock};
    padding: 50px;
    color: ${({ themestyles }) => themestyles.color};

    @media screen and (max-width: 768px) {
        padding: 30px;
    }

    @media screen and (max-width: 340px) {
        padding: 20px;
        row-gap: 25px;
        column-gap: 20px;
    }   
`

export const Item = styled.div`
    padding: 5px 0;
    text-align: center;
`

export const Inner = styled.div`
    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Span = styled.span`
    font-size: 20px;
    padding: 0 10px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }   
`

export const IconIner = styled.span`
    padding-right: 10px;
`

export const Name = styled.span`
    font-size: 18px;
    font-weight: 600;
`