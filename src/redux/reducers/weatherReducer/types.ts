export interface WeatherDataType {
    current: {
        cloud: number,
        condition: {
            text: string,
            icon: string,
            code: number
        }
        feelslike_c: number,
        feelslike_f: number,
        gust_kph: number,
        gust_mph: number,
        humidity: number,
        is_day: number,
        last_updated: string
        last_updated_epoch: number,
        precip_in: number,
        precip_mm: number,
        pressure_in: number,
        pressure_mb: number,
        temp_c: number,
        temp_f: number,
        uv: number,
        vis_km: number,
        vis_miles: number,
        wind_degree: number,
        wind_dir: string,
        wind_kph: number,
        wind_mph: number
    }
    location: {
        country: string
        lat: number,
        localtime: string,
        localtime_epoch: number,
        lon: number,
        name: string,
        region: string,
        tz_id: string,
    }
}
export interface WeatherForecastDataType {
    astro: {
        is_moon_up: number
        is_sun_up: number
        moon_illumination: string
        moon_phase: string
        moonrise: string
        moonset: string
        sunrise: string
        sunset: string
    }
    date: string
    date_epoch: number
    day: {
        air_quality: {
            co: number,
            'gb-defra-index': number
            no2: number
            o3: number
            pm2_5: number
            pm10: number
            so2: number
            'us-epa-index': number
        }
        avghumidity: number
        'avgtemp_c': number
        avgtemp_f: number
        avgvis_km: number
        avgvis_miles: number
        condition: {
            code: number
            icon: string
            text: string
        }
        daily_chance_of_rain: number
        daily_chance_of_snow: number
        daily_will_it_rain: number
        daily_will_it_snow: number
        maxtemp_c: number
        maxtemp_f: number
        maxwind_kph: number
        maxwind_mph: number
        mintemp_c: number
        minttemp_f: number
        totalprecip_in: number
        totalprecip_mm: number
        totalsnow_cm: number
        uv: number
        hour: Array<Object>
    }
}
export interface InitialState {
    weatherData: WeatherDataType | null,
    forecastData: Array<WeatherForecastDataType> | null,
    loading: boolean,
    error: string | null,
}