import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Span, Inner } from "./styledBock";
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";

export const WindAndHumidityBlock = ({ weatherData }: any) => {
    return (
        <Container>
            <Inner>
                <FontAwesomeIcon size="xl" icon={faWind} />
                <Span>{weatherData?.current.wind_mph} mph</Span>
            </Inner>
            <Inner>
                <FontAwesomeIcon size="xl" icon={faDroplet} />
                <Span>{weatherData?.current.humidity} %</Span>
            </Inner>
        </Container>
    )
}