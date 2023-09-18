import { faAppStore, faFacebook, faGooglePlay, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { List } from "./styledSocialMedia"
import { Icon } from "./components/icon"

export const SocialMedia = () => {
    const icons = [faFacebook, faInstagram, faTwitter, faAppStore, faGooglePlay]
    return (
        <List>
            {icons.map((item) => <Icon icon={item} />)}
        </List>
    )
}