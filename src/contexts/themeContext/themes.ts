import { ThemesType } from "./types";

export enum Colors {
    BLACK = '#000',
    WHITE = '#fff',
    MINE_SHAFT = '#1c1919',
    WHITE_OPACITY_80 = '#ffffffc9',
    GREY_OPACITY_40 = '#bdbaba69'
    
    
}

export const Themes: ThemesType = {
    light: {
        body: Colors.WHITE,
        background: Colors.WHITE,
        backgroundInputSearch: Colors.GREY_OPACITY_40, 
        color: Colors.BLACK
    },
    dark: {
        body: Colors.MINE_SHAFT,
        background: Colors.BLACK,
        backgroundInputSearch: Colors.WHITE_OPACITY_80,
        color: Colors.WHITE
    }
}