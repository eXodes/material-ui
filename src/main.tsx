import { StrictMode } from "react";
import { render } from "react-dom";
import "@/index.css";
import App from "@/App";
import { CssBaseline } from "@mui/material";
import { isProduction } from "@/helpers";
import ThemeProvider from "@/contexts/theme";

if (!isProduction(process.env.NODE_ENV!)) {
    import("@axe-core/react").then((axe) =>
        axe.default(import("react"), import("react-dom"), 1000),
    );
}

render(
    <StrictMode>
        <ThemeProvider>
            <CssBaseline>
                <App />
            </CssBaseline>
        </ThemeProvider>
    </StrictMode>,
    document.getElementById("root"),
);
