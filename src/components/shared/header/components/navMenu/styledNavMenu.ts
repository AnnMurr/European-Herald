import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const Nav = styled.nav`
    padding-right: 30px;
    max-width: 90%;
    width: 100%;

    @media screen and (max-width: 1140px) {
        display: none;
    }
`