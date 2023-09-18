import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlockWrapper = styled.div`
    padding: 10px 0 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 10px;
`

export const TitleNewsBlockText = styled.h4`
    font-size: 20px;
`

export const StyledLink = styled(Link)`
    color: #000;
    display: block; 
    width: fit-content;
    border-bottom: 2px solid transparent;
    transition: all 0.5s ease;

    &:hover {
        border-bottom: 2px solid brown;
    }
`