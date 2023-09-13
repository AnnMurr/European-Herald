import { ThreeDots } from "react-loader-spinner";
import { Container } from "./styledSpinner";

export const Spinner = () => {
    return (
        <Container>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="black"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
            />
        </Container>
    )
}