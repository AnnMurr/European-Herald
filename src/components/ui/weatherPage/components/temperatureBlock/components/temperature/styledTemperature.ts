import styled from "styled-components";
import { Theme, ThemeStyledProps } from "../../../../../../../contexts/themeContext/types";
import { DegreesType } from "../../../../types";

interface DegreesBtnProps {
    degrees: DegreesType,
    themestyles: Theme,
}

export const Wrapper = styled.div`
    display: flex;
`

export const InnerBtns = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

export const TemperatureText = styled.span<ThemeStyledProps>`
    font-size: 200px;
    color: ${({ themestyles }) => themestyles.color};

    @media screen and (max-width: 768px) {
        font-size: 100px;
    }
`

export const CelciusBtn = styled.button<DegreesBtnProps>`
    line-height: 50px;
    color: ${({ themestyles, degrees }) => degrees === 'celcius' ? 'gray' :   themestyles.color};
    font-weight: 700;
    font-size: 50px;
    border-right:${({ themestyles }) => `1px solid ${themestyles.color}` };
    padding: 0 20px;

    @media screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 30px;
        padding: 0 10px;
    }   
`

export const FahrenheitBtn = styled.button<DegreesBtnProps>`
    line-height: 50px;
    border-left:${({ themestyles }) => `1px solid ${themestyles.color}` };
    color: ${({ themestyles, degrees }) => degrees === 'fahrenheit' ? 'gray' :   themestyles.color};
    font-weight: 700;
    font-size: 50px;
    padding: 0 20px;

    @media screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 30px;
        padding: 0 10px;
    }   
`