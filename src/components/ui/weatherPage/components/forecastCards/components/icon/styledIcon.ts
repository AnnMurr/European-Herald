import styled from "styled-components";

export const Inner = styled.div`
    width: 60px;

    @media screen and (max-width: 768px) {
        width: 40px;
        margin-left: 30px;
    }

    @media screen and (max-width: 340px) {
        margin-left: 20px;
    }   
`