import styled from "styled-components";

export const Container = styled.div`
    max-width: 1400px;
    padding: 0 15px; 
    margin: 0 auto;
`

export const Wrapper  = styled.div`
    padding: 160px 0 60px 0;
    min-height: 80vh;

    @media screen and (max-width: 520px) {
        padding: 180px 0 60px 0;
    }
`