import { TextProps } from "../../../../types";
import { Span, Container } from "./styledText";

export const Text: React.FC<TextProps> = ({ text }) => {
    return (
        <Container>
            <Span>Sorry, there are no results for {text}</Span>
        </Container>
    )
}