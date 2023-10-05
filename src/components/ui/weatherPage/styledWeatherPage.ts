import styled from "styled-components";

export const Container = styled.div`
    padding: 0 15px;
    max-width: 1400px;
    margin: 0 auto;
  `

export const Wrapper = styled.div`
    padding: 160px 0 60px 0;
    position: relative;

    @media screen and (max-width: 520px) {
        padding: 120px 0 60px 0;
    }
`

export const Inner = styled.div`
    padding: 50px;
`

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
    margin-top: 30px;
`