import styled from "styled-components";

interface SocialMediaIconStyle {
    className: string
}

export const Item = styled.li`
    padding: 10px;
`

export const Link = styled.a<SocialMediaIconStyle>`
    color: #000;
    width:${({ className }) => className === 'app-store' ? 'fit-content' : ''};
    height: ${({ className }) => className === 'app-store' ? 'fit-content' : ''};
    display: ${({ className }) => className === 'app-store' ? 'fit-content' : ''};
    border-radius:${({ className }) => className === 'instagram' ? '7px' :
        className === 'app-store' ? '20px' : ''};

    width: 25px;
    display: flex;
    height: 25px;
    justify-content: center;
    align-items: center;
    
    &:hover {
        color:${({ className }) => className === 'facebook' ? '#4867aa' :
        className === 'twitter' ? '#1c96e8' :
        className === 'app-store' ? '#fff' :
        className === 'google-play' ? '#34a850' :
        'white'
    };

    background:${({ className }) => className === 'instagram' ? 
    'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(209,31,192,1) 30%, rgba(221,63,63,1) 70%, rgba(255,229,0,1) 100%)' :
        className === 'app-store' ? '#00a5e8' : ''};
    };
`