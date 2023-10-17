import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeStyledProps } from "../../../../../contexts/themeContext/types";

export const Label = styled.label`
    display: flex;
    align-items: center;
    height: 32px;
    width: 200px;

     @media screen and (max-width: 380px) {
        width: auto;
    }
`

export const IconBtnInner = styled(Link)`
    position: relative;
    right: 23px;

    @media screen and (max-width: 380px) {
        // position: static;
        display: none;
    }
`

export const IconBtnInnerMobile = styled(Link)`
    display: none;

    @media screen and (max-width: 380px) {
        display: block;
    }
`

export const Input = styled.input<ThemeStyledProps>`
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    height: 100%;
    width: 100%;
    background-color:${({ themestyles }) => themestyles.backgroundInputSearch};
    padding: 5px 25px 5px 10px;

    @media screen and (max-width: 380px) {
        display: none;
    }
`

export const Span = styled.span`
    font-size: 13px;
`

export const Underline = styled.span`
    width: 100%;
    height: 2px;
    margin-top: 15px;
    align-self: flex-end;
    left: -200px;
    background: #080808;
    position: absolute;
    transition: all .3s ease-Out;
    bottom: 0;
`

export const Container = styled.div`
    margin-right: 20px;
`