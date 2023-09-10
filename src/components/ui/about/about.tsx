import { Container, Title, TitleInner, Wrapper, Text, Item, Items, Span } from "./styledAbout"

export const About = () => {
    return (
        <Container>
            <Wrapper>
                <TitleInner>
                    <Title>About Us</Title>
                </TitleInner>
                <Text>
                    Welcome to European Herald, your trusted source for
                    the latest news, updates, and insights from around the world.
                    We are dedicated to providing you with accurate and up-to-date
                    information on a wide range of topics, including politics, technology,
                    health, entertainment, and more.
                </Text>
                <TitleInner>
                    <Title>Our Mission</Title>
                </TitleInner>
                <Text>
                    Our mission is to deliver high-quality journalism that informs,
                    inspires, and empowers our readers. We believe in the power of
                    information to drive positive change and foster a better understanding
                    of the world we live in.
                </Text>
                <TitleInner>
                    <Title>Our Team</Title>
                </TitleInner>
                <Text>
                    Behind every great publication is a team of dedicated professionals.
                    Our team of experienced journalists, editors, and content creators is
                    passionate about delivering news that matters. We work tirelessly to
                    bring you breaking news, in-depth analysis, and thought-provoking
                    features.
                </Text>
                <TitleInner>
                    <Title>What Sets Us Apart</Title>
                </TitleInner>
                <Text>
                    <Items>
                        <Item>
                            <Span>Unbiased Reporting</Span>: We are committed to providing balanced and
                            unbiased reporting. Our stories are thoroughly researched, and we
                            strive to present multiple perspectives on every issue.
                        </Item>
                        <Item>
                            <Span>Accuracy</Span>: Accuracy is at the core of our journalistic standards.
                            We fact-check our stories rigorously to ensure that you receive
                            reliable information.
                        </Item>
                        <Item>
                            <Span>Timeliness</Span>: We understand the importance of staying up to date.
                            Our team works around the clock to bring you the latest news as it
                            happens.
                        </Item>
                        <Item>
                            <Span>Community Engagement</Span>: We value our readers and encourage community
                            engagement. Your feedback, comments, and ideas are essential in shaping
                            our content.
                        </Item>
                    </Items>
                </Text>
                <TitleInner>
                    <Title>Our Commitment to Integrity</Title>
                </TitleInner>
                <Text>
                    We uphold the highest standards of journalistic integrity.
                    Our reporters and editors follow strict ethical guidelines to maintain
                    the trust of our readers. We are dedicated to transparency,
                    accountability, and responsible journalism.
                </Text>
            </Wrapper>
        </Container>
    )
}