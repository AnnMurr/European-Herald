import styled from "styled-components";

export const ItemInner = styled.li`
    padding: 20px 0;
    justify-content: space-between;
    display: flex;
    border-top: 1px solid;

    &:last-child {
        border-bottom: 1px solid;
    }
`

export const Headline = styled.h5`
   font-size: 20px;
`

export const Span = styled.span`
   font-size: 18px;
`