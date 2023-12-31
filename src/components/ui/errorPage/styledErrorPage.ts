import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 50;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: white;
`
export const Wrapper = styled.div`
    max-width: fit-content;
    margin: 0 auto;
    text-align: center;
`

export const Title = styled.h1`
    font-size: 150px;
    font-weight: bold;
    color: #000000b8;
    margin: 0;
`

export const SubTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #000000b8; 
    margin: 0;
`