import styled from "styled-components";
import { DegreesType } from "./temperature";
import { Theme } from "../../../../../../../../../contexts/themeContext/types";

interface DegreesBtnProps {
    degrees: DegreesType,
    themestyles: Theme,
}

export const Wrapper = styled.div`
    display: flex;
`

export const InnerBtns = styled.div`
    display: flex;
    width: 48px;
    align-items: baseline;
    justify-content: space-between;
`

export const TemperatureText = styled.span`
    font-size: 40px;

    @media screen and (max-width: 576px) {
        font-size: 30px;
    }
`

export const CelciusBtn = styled.button<DegreesBtnProps>`
    opacity:${({ degrees }) => degrees === 'celcius' ? '0.4' : '1'};
    color: ${({ themestyles }) => themestyles.color};
    font-weight: 700;
`

export const FahrenheitBtn = styled.button<DegreesBtnProps>`
    opacity:${({ degrees }) => degrees === 'fahrenheit' ? '0.4' : '1'};
    color: ${({ themestyles }) => themestyles.color};
    font-weight: 700;
`