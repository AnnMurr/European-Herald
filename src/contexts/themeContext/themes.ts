import { ThemesType } from "./types";

export enum Colors {
    BLACK = '#000',
    WHITE = '#fff',
    MINE_SHAFT = '#1c1919',
    WHITE_OPACITY_80 = '#ffffffc9',
    GREY_OPACITY_40 = '#bdbaba69',
    DARK_BROWN = '#272424',
    COD_GRRAY = '#101010',
    SILVER = '#d5d5d5',
    CONCRETE = '#f2f2f2'  
}

export const Themes: ThemesType = {
    light: {
        body: Colors.WHITE,
        backgroundInputSearch: Colors.GREY_OPACITY_40, 
        backgroundForm: Colors.WHITE, 
        backgroundHeader: Colors.WHITE, 
        backgroundSettingsForm: Colors.SILVER, 
        backgroundForecastBlock: Colors.CONCRETE, 
        color: Colors.BLACK
    },
    dark: {
        body: Colors.MINE_SHAFT,
        backgroundInputSearch: Colors.WHITE_OPACITY_80,
        backgroundForm: Colors.DARK_BROWN, 
        backgroundHeader: Colors.COD_GRRAY, 
        backgroundSettingsForm: Colors.DARK_BROWN, 
        backgroundForecastBlock: Colors.DARK_BROWN, 
        color: Colors.WHITE
    }
}