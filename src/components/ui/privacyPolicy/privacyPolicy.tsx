import { Title } from "./components/title/title";
import { Text } from "./components/text/text";
import { ContactUsText, TextContent } from "./textContent";

import { Container, Wrapper } from "./styledPrivacyPolicy";

export const PrivacyPolicy = () => {
  return (
    <Container>
      <Wrapper>
        <Title text={'Privacy Policy'} />
        <Text text={TextContent.privacyText} />
        <Title text={'Collected Information'} />
        <Text text={TextContent.collectedText} />
        <Title text={'Use of Information'} />
        <Text text={TextContent.useOfInfoText} />
        <Title text={'Protection of Information'} />
        <Text text={TextContent.protectionOfInformationText} />
        <Title text={'Links to Third-Party Resources'} />
        <Text text={TextContent.linksToResourcesText} />
        <Title text={'Changes to the Privacy Policy'} />
        <Text text={TextContent.changesText} />
        <Title text={'Contact Us'} />
        <Text text={<ContactUsText />} />
      </Wrapper>
    </Container>
  )
}
