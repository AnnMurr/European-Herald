import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    justify-content: center;
`

export const WeatherIconInner = styled.div`
    width: 150px;

     @media screen and (max-width: 768px) {
        width: 80px;
    }   
`