import { styled } from 'styled-components';

interface ButtonProps {
    className: string
}

export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.5s ease;
    position: relative;
    overflow: hidden;
    border: 2px solid #000;
    margin: 5px 0;
    padding:${({className}) => className === 'btn search__btn' ? '5px 10px' : '10px 10px'};
    width: 100%;
    max-width: 10rem;
    justify-content: center;
    font-family: 'Lato';
`