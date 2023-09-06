import { Container, List } from "./styledHeader"

import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { IconBtn } from "../../reusable/iconBtn/iconBtn"
import { AuthenticationOptions } from './components/authenticationOptions/authenticationOptions';
import { useState } from "react";

export const Header = () => {
    const [isAuthOptionsActive, setIsAuthOptionsActive] = useState<boolean>(false)

    const openAuthOptions = () => setIsAuthOptionsActive(true)

    return (
        <Container>
            <nav>
                <List>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                </List>
            </nav>
            <>
               <IconBtn onClickFunc={openAuthOptions} icon={faCircleUser} size='lg'/>            
            </>
            {isAuthOptionsActive ? <AuthenticationOptions closeModal={setIsAuthOptionsActive} /> : null}
        </Container>
    )
}