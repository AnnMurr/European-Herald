import { Title, Text, List } from ".";
import { TextContent } from "./textContent";
import { Container, Wrapper } from "./styledAbout";

export const About = () => {
    return (
        <Container>
            <Wrapper>
                <Title text={'About Us'} />
                <Text text={TextContent.aboutUsText} />
                <Title text={'Our Mission'} />
                <Text text={TextContent.ourMissionText} />
                <Title text={'Our Team'} />
                <Text text={TextContent.ourTeamText} />
                <Title text={'What Sets Us Apart'} />
                <List />
                <Title text={'Our Commitment to Integrity'} />
                <Text text={TextContent.ourCommitment} />
            </Wrapper>
        </Container>
    )
}