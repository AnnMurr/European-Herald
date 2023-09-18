import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Item, Link } from "./styledIcon"

export const Icon = ({ icon }: any) => {
    return (
        <Item>
            <Link href="#">
                <FontAwesomeIcon icon={icon} size="xl" />
            </Link>
        </Item>
    )
}