import styled from "styled-components";

export const Inner = styled.div`
    margin-bottom: 10px;  
`

export const Input = styled.input`
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: #bdbaba69;
    padding: 5px;
`

export const Label = styled.label`
    display: block;
    padding-bottom: 5px;
    font-size: 16px;

    @media screen and (max-width: 520px) {
        font-size: 14px;
    }
`