
import { Theme } from "../../../../../../../../../contexts/themeContext/types";
import styled from "styled-components";
import { DegreesType } from "../../../../../../../../../contexts/weatherContext/types";

interface DegreesBtnProps {
    degrees: DegreesType,
    themestyles: Theme,
}

export const Wrapper = styled.div`
    display: flex;
`

export const InnerBtns = styled.div`
    display: flex;
    width: 100px;
    max-width: 50px;
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
    color: ${({ themestyles, degrees }) => degrees === 'celcius' ? themestyles.color : 'gray'};
    cursor: ${({ themestyles, degrees }) => degrees === 'celcius' ? 'default' : 'pointer'};
    font-weight: 700;
`

export const FahrenheitBtn = styled.button<DegreesBtnProps>`
    color: ${({ themestyles, degrees }) => degrees === 'fahrenheit' ? themestyles.color : 'gray'};
    cursor: ${({ themestyles, degrees }) => degrees === 'fahrenheit' ? 'default' : 'pointer'};
    font-weight: 700;
`