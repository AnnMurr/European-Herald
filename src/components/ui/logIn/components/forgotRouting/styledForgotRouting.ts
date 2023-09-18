import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    text-align: start;
    padding: 0;
`

export const Span = styled.span`
    font-size: 13px;
`

export const StyledLink = styled(Link)`
    color: #000;
    border-bottom: 1px solid #000;

    &:hover {
        border-bottom: 2px solid #000;
    }
`