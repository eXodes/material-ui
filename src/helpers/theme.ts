import { PaletteMode } from "@mui/material";
import { darkOptions, lightOptions } from "@/configs/theme";
import { THEME_MODE } from "@/constants/theme";

export const getPaletteTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === THEME_MODE.LIGHT ? lightOptions : darkOptions),
    },
});
