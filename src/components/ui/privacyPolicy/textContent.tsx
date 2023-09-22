import { useContext } from "react"
import { ThemeContextType } from "../../../contexts/themeContext/types"
import { ThemeContext } from "../../../contexts/themeContext/themeContext"
import { StyledLink } from "./styledPrivacyPolicy"

export enum TextContent {
    privacyText = 'Welcome to the privacy policy page of our news website. Your privacy is very important to us, and we offer the following information on how we collect, use, and protect your personal information.',
    collectedText = 'We collect information that you voluntarily provide to us when registering on the website, subscribing to news updates, submitting comments, and providing feedback. This may include your name, email address, and other data you willingly share.',
    useOfInfoText = 'We use your personal information for the following purposes: Providing you with access to news content and updates. Processing your requests and feedback. Improving and customizing our content and services for you. Sending you information about our news, promotions, and events (if you subscribe to our newsletter).',
    protectionOfInformationText = 'We make every effort to ensure the security of your personal information. We employ appropriate data protection measures to prevent unauthorized access, data breaches, and alterations.',
    linksToResourcesText = 'Our news articles may contain links to third-party websites. We are not responsible for the privacy policies or information collection practices on these websites.',
    changesText = ' We reserve the right to make changes to our privacy policy. Any changes will be posted on this page, and we recommend checking it periodically to stay informed about our data collection and usage practices.',
}

export const ContactUsText = () => {
    const themeContext = useContext<ThemeContextType>(ThemeContext)
  
    return (
      <>
        If you have any questions or inquiries regarding our privacy policy, please{' '}
        <StyledLink themestyles={themeContext.themeStyles} className="privacy__routing-link" to="/contact">contact us</StyledLink>
        <br /><br />
        Thank you for visiting our website and trusting us with your privacy. Your privacy is our priority.
      </>
    )
  }