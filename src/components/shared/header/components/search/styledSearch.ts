import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    align-items: center;
    height: 32px;
    width: 200px;
`

export const IconBtnInner = styled.div`
    position: relative;
    right: 23px;
`

export const Input = styled.input`
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    height: 100%;
    background-color: #bdbaba69;
    padding: 5px 25px 5px 10px;
`

export const Span = styled.span`
    font-size: 13px;
`

export const Underline = styled.span`
    width: 100%;
    height: 2px;
    margin-top: 15px;
    align-self: flex-end;
    left: -200px;
    background: #080808;
    position: absolute;
    transition: all .3s ease-Out;
    bottom: 0;
`