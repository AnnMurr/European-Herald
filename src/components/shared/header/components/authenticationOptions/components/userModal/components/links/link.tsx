import { StyledLink, Wrap } from "./styledLink";

interface LinkBtnProps {
    linkTo: string,
    text: string
}

export const LinkBtn: React.FC<LinkBtnProps> = ({ linkTo, text }) => {
    return (
        <Wrap>
            <StyledLink to={linkTo}>{text}</StyledLink>
        </Wrap>
    )
} 