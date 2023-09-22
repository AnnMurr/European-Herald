import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeStyledProps } from "../../../contexts/themeContext/types";

export const Container = styled.div`
    padding: 0 15px;
    max-width: 1400px;
    margin: 0 auto;
`

export const Wrapper = styled.div`
    padding: 160px 0 60px 0;
`

export const StyledLink = styled(Link)<ThemeStyledProps>`
    color:${({ themestyles }) => themestyles.color};
    border-bottom:${({ themestyles }) => `1px solid ${themestyles.color}`};
    
    &:hover {
        border-bottom:${({ themestyles }) => `2px solid ${themestyles.color}`};
    }
`