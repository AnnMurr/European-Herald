import styled from "styled-components";

export const Container = styled.div`
    text-align: end;
    padding-right: 20px;
    margin-left: auto;

    @media screen and (max-width: 576px) {
        display: none;
    }
`
export const Span = styled.span`
    font-size: 14px;
    font-weight: 700;
`

export const Heading = styled.span`
    font-size: 25px;
    font-weight: 700;

     @media screen and (max-width: 924px) {
        font-size: 20px;
    }
`

export const Weekday = styled.span`
    font-size: 20px;

     @media screen and (max-width: 924px) {
        font-size: 17px;
    }
`