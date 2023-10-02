import { WeatherDataProps } from "../../types";
import { Container, Heading, Span, Weekday } from "./styledDateInformation";

export const DateInformation: React.FC<WeatherDataProps> = ({ weatherData }) => {
    const lastUpdated = weatherData?.current.last_updated
    const date = lastUpdated ? new Date(lastUpdated) : null
    const weekday = date?.toLocaleDateString('en-US', { weekday: 'long' })
    const time = date?.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' })

    return (
        <Container>
            <div>
                <Heading>Weather</Heading>
            </div>
            <div>
                <Weekday>{weekday} {time}</Weekday>
            </div>
            <div>
                <Span>
                    {weatherData?.current.condition.text}
                </Span>
            </div>
        </Container >
    )
}