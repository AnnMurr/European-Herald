import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background-color: #e4e3e3;
    padding: 10px 100px 10px 10px;
    border-radius: 5px;
    max-height: 43px;
`

export const Label = styled.label`
    width: 60%;
    display: block;
    margin: 0 auto;
    display: flex;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`