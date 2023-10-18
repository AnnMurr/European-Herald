import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`

export const WeatherIconInner = styled.div`
    width: 150px;

     @media screen and (max-width: 768px) {
        width: 80px;
    }   
`