import { useMediaQuery, useTheme } from "@material-ui/core";

interface BreakpointOptions {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
}

export const useBreakpoints = ({ sm, md, lg, xl }: BreakpointOptions) => {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    const large = useMediaQuery(theme.breakpoints.down("lg"));

    return small
        ? sm
        : medium
        ? md ?? sm
        : large
        ? lg ?? md ?? sm
        : xl ?? lg ?? md ?? sm;
};
