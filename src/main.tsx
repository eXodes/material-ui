import { StrictMode } from "react";
import { render } from "react-dom";
import "@/index.css";
import App from "@/App";
import { CssBaseline } from "@material-ui/core";
import { isProduction } from "@/helpers";

if (!isProduction(process.env.NODE_ENV!)) {
    import("@axe-core/react").then((axe) =>
        axe.default(import("react"), import("react-dom"), 1000),
    );
}

render(
    <StrictMode>
        <CssBaseline>
            <App />
        </CssBaseline>
    </StrictMode>,
    document.getElementById("root"),
);
