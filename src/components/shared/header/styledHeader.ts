import { styled } from "styled-components";

export const Container = styled.header`
    width: 100%;
    background-color: white;
    padding: 1em 2em;
    border-bottom: 1px solid #0000006e;
    position: fixed;
    top: 0;
    z-index: 20;
`

export const UserIcon = styled.ul`
    display: flex;
`

export const HeaderMenuNav = styled.div`
    border-top: 1px solid gray;
    padding-top: 1em;
`

export const HeaderMenuNavInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`