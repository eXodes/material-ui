import { PaletteMode } from "@material-ui/core";
import { darkOptions, lightOptions } from "@/configs/theme";
import { THEME_MODE } from "@/constants/theme";

export const getPaletteTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === THEME_MODE.LIGHT ? lightOptions : darkOptions),
    },
});
