import styled from "styled-components";
import { ThemeStyledProps } from "../../../contexts/themeContext/types";

export const Container = styled.div`
    background-color: #00000017;
    padding: 120px 15px 60px 15px;
    min-height: 100vh;
`

export const Wrapper = styled.div<ThemeStyledProps>`
    background-color:${({ themestyles }) => themestyles.backgroundForm};
    width: 100%;
    max-width: 470px;
    margin: 0 auto;
    text-align: center;
    padding: 20px 50px;

    @media screen and (max-width: 520px) {
        padding: 20px 30px;
    }
`