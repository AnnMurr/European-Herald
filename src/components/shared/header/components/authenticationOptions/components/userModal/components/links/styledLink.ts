import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    transition: all 0.5s ease;
    
    &:last-child {
        border-top: 1px solid transparent;
    }

    &:hover {
        opacity: 0.7;
    }
`

export const StyledLink = styled(Link)`
    font-size: 16px;
    font-weight: 700;
    color: #000;
`