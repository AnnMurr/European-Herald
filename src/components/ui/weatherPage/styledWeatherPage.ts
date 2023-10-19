import styled from "styled-components";
import { ThemeStyledProps } from "../../../contexts/themeContext/types";

export const Container = styled.div`
    padding: 0 15px;
    max-width: 1400px;
    margin: 0 auto;
  `
  
export const Wrapper = styled.div`
    padding: 160px 0 60px 0;
    position: relative;
`

export const Inner = styled.div`
    padding: 50px;

    @media screen and (max-width: 520px) {
        padding: 20px;
    }
`

export const CardsWrapper = styled.div<ThemeStyledProps>`
    display: flex;
    justify-content: space-between;
    background-color: ${({ themestyles }) => themestyles.backgroundForecastBlock};
    margin-top: 30px;

    @media screen and (max-width: 576px) {
        display: block;
    }   
`