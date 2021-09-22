import { useEffect, useMemo, useState } from "react";
import { createTheme, PaletteMode, useMediaQuery } from "@mui/material";
import { useLocalStorage } from "react-use";
import { getPaletteTokens } from "@/helpers/theme";
import { THEME_KEY, THEME_MODE } from "@/constants/theme";

export const useDarkMode = () => {
    const [localMode, setLocalMode] = useLocalStorage<THEME_MODE>(THEME_KEY);
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const [mode, setMode] = useState<PaletteMode>(
        prefersDarkMode ? THEME_MODE.DARK : THEME_MODE.LIGHT,
    );

    const theme = useMemo(() => createTheme(getPaletteTokens(mode)), [mode]);

    const toggleMode = (value: THEME_MODE | null = null) => {
        setMode((prev) => {
            const current =
                value ?? prev === THEME_MODE.DARK
                    ? THEME_MODE.LIGHT
                    : THEME_MODE.DARK;

            setLocalMode(current);

            return current;
        });
    };

    useEffect(() => {
        localMode
            ? setMode(localMode)
            : prefersDarkMode
            ? setMode(THEME_MODE.DARK)
            : setMode(THEME_MODE.LIGHT);
    }, [localMode, prefersDarkMode]);

    return { theme, mode, toggleMode };
};
