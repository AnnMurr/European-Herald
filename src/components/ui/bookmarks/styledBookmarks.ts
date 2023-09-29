import styled from "styled-components";

export const Container = styled.div`
    padding: 0 15px;
    max-width: 1400px;
    margin: 0 auto;
`

export const Wrapper = styled.div`
    padding: 160px 0 60px 0;
    min-height: 80vh;

    @media screen and (max-width: 520px) {
        padding: 120px 0 60px 0;
    }
`

export const BookmarksWrap = styled.div`
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`