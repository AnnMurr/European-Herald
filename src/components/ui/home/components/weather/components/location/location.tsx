import { WeatherDataProps } from "../../types";
import { CityText, RegionText, Container } from "./styledLocation";

export const Location: React.FC<WeatherDataProps> = ({ weatherData }) => {
    return (
        <Container>
            <CityText>
                {weatherData?.location.name}
            </CityText>
            <RegionText>
                {weatherData?.location.region}, {weatherData?.location.country}
            </RegionText>
        </Container>
    )
}