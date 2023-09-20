import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    padding: 20px 0;
`

export const StyledLink = styled(Link)`
    font-size: 14px;
    margin: 0 5px;
    color: black;
    transition: all 0.5s ease;

    &:hover {
        border-bottom: 1px solid black;
    }
`