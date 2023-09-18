import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    
`

export const StyledLink = styled(Link)`
    font-size: 14px;
    padding: 0 5px;
    color: black;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.7;
    }
`