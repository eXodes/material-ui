import { createContext, FC, ReactNode } from "react";
import { PaletteMode, Theme } from "@mui/material";
import { useDarkMode } from "@/hooks/utils/useDarkMode";
import { THEME_MODE } from "@/constants/theme";

interface ThemeState {
    mode: PaletteMode;
    toggleMode: (value?: THEME_MODE | null) => void;
    theme: Partial<Theme>;
}

const initialState: ThemeState = {
    mode: THEME_MODE.LIGHT,
    toggleMode: () => {},
    theme: {},
};

export const ThemeContext = createContext(initialState);

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const state = useDarkMode();

    return (
        <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;
