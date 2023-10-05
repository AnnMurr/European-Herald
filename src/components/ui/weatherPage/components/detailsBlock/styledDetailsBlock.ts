import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    row-gap: 40px;
    column-gap: 50px;
    background-color: #e4e3e378;
    padding: 50px;
`

export const Inner = styled.div`
    padding: 5px 0;
    text-align: center;
`

export const Span = styled.span`
    font-size: 20px;
    padding: 0 10px;
`

export const IconIner = styled.span`
    padding-right: 10px;
`

export const Name = styled.span`
    font-size: 18px;
    font-weight: 600;
`