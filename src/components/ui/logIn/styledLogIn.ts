import styled from "styled-components";
import { ThemeStyledProps } from "../../../contexts/themeContext/types";

export const Container = styled.div`
    background-color: #00000017;
    padding-top: 6%;
    min-height: 100vh;
`

export const Wrapper = styled.div<ThemeStyledProps>`
    background-color:${({ themestyles }) => themestyles.backgroundForm};
    width: 25%;
    margin: 0 auto;
    text-align: center;
    padding: 20px 50px;
`