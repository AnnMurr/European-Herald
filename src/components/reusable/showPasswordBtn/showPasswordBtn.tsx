import { IconBtn } from "../iconBtn/iconBtn";
import { Wrapper } from "./styledShowPasswordBtn";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface BtnShowPasswordProps {
    icon: IconDefinition,
    func: () => void
}

export const BtnShowPassword: React.FC<BtnShowPasswordProps> = ({ icon, func }) => {
    return (
        <Wrapper>
            <IconBtn
                size={"sm"}
                icon={icon}
                onClickFunc={func}
            />
        </Wrapper>
    )
}