import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    max-width: 300px;
    width: 100%;
    background-color: aliceblue;
    padding: 20px;
    left: 50%;
    margin-left: -150px;
    top: 50%;
    margin-top: -160px;

    @media screen and (max-width: 520px) {
        max-width: 200px;
        margin-left: -100px;
        padding: 15px;
    }
`