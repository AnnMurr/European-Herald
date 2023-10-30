import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    max-width: 300px;
    width: 100%;
    background-color: aliceblue;
    padding: 20px;
    left: 50%;
    top: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 340px) {
        max-width: 230px;
        padding: 15px;
    }
`