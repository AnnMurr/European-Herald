import { Title } from "./components/title/title";
import { Container, Wrapper } from "./styledContact";
import { Text } from "./components/text/text";
import { TextContent } from "./textContent";

export const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title text={'Contact Us'} />
        <Text text={TextContent.contactUsText} />
        <Title text={'Our Contact Information:'} />
        <Text text={TextContent.contactInfo} />
        <Title text={'Contact Us via Email:'} />
        <Text text={TextContent.contactInfoEmail} />
        <Title text={'How to Find Us:'} />
        <Text text={TextContent.infoFindUs} />
      </Wrapper>
    </Container>
  )
}