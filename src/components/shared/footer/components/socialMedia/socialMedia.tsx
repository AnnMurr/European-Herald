import { faAppStore, faFacebook, faGooglePlay, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Icon } from "./components/icon";
import { v4 as uuidv4 } from 'uuid';

import { List } from "./styledSocialMedia";

export const SocialMedia = () => {
    const icons = [faFacebook, faInstagram, faTwitter, faAppStore, faGooglePlay]

    return (
        <List>
            {icons.map((item) => <Icon key={uuidv4()} icon={item} />)}
        </List>
    )
}