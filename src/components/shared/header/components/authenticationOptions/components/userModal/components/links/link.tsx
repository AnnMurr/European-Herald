import { StyledLink, Wrap } from "./styledLink";

interface LinkBtnProps {
    linkTo: string,
    text: string,
    closeModal: () => void
}

export const LinkBtn: React.FC<LinkBtnProps> = ({ linkTo, text, closeModal }) => {
    return (
        <Wrap>
            <StyledLink onClick={closeModal} to={linkTo}>{text}</StyledLink>
        </Wrap>
    )
} 