import { Container, Wrapper, Title, TitleInner, Text } from "./styledContact";

export const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <TitleInner>
          <Title>Contact Us</Title>
        </TitleInner>
        <Text>
          Welcome to the "Contact Us" page of our news website. We appreciate
          your interest in our publication and are ready to answer your
          questions, receive your feedback, and assist you with any other
          inquiries related to our website.
        </Text>
        <TitleInner>
          <Title>Our Contact Information:</Title>
        </TitleInner>
        <Text>
          Email: info@european.herald.com <br />
          Phone: +1 (XXX) XXX-XXXX<br /> 
          Address: News Street, 123, City, Country, Postal Code
        </Text>
        <TitleInner>
          <Title>Contact Us via Email:</Title>
        </TitleInner>
        <Text>
          If you have questions, comments, or suggestions, you can reach out to
          us via email. We will make every effort to respond to you as soon as
          possible.
        </Text>
        <TitleInner>
          <Title>How to Find Us:</Title>
        </TitleInner>
        <Text>
          If you wish to visit our editorial office or send postal
          correspondence, please use the address provided above. Feel free to
          get in touch with us for any inquiries; we are always ready to assist
          and engage with our readers. Your feedback and opinions are valuable
          to us, and we strive to make our website better for you. Thank you for
          your support and interest in our news!
        </Text>
      </Wrapper>
    </Container>
  )
}
