import styled from "styled-components";
import { ThemeStyledProps } from "../../../contexts/themeContext/types";

export const Container = styled.div`
    padding: 0 15px;
    max-width: 900px;
    margin: 0 auto;
`

export const Inner = styled.div<ThemeStyledProps>`
    padding: 65px 50px;
    background-color:${({ themestyles }) => themestyles.backgroundSettingsForm};

    @media screen and (max-width: 520px) {
        padding: 40px 30px;
    }
`

export const Wrapper = styled.div`
    padding: 160px 0 60px 0;
    min-height: 80vh;
`