import { useContext, useState } from "react";
import logo from "@/assets/logo.svg";
import "@/App.css";
import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Link,
    Paper,
    styled,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from "@material-ui/core";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { ThemeContext } from "@/contexts/theme";
import { THEME_MODE } from "@/constants/theme";

const Image = styled("img")(() => ({
    height: "40vmin",
    pointerEvents: "none",
}));

const LightModeIcon = styled(SunIcon)({
    width: "2rem",
});

const DarkModeIcon = styled(MoonIcon)({
    width: "2rem",
});

const App = () => {
    const { theme, mode, toggleMode } = useContext(ThemeContext);
    const [count, setCount] = useState(0);
    const allowMotion = useMediaQuery(
        "(prefers-reduced-motion: no-preference)",
    );

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                sx={{
                    backgroundColor: "background.paper",
                }}
            >
                <Container
                    sx={{
                        maxWidth: "lg",
                        minHeight: "100vh",
                    }}
                >
                    <Paper
                        elevation={2}
                        sx={{
                            mt: 4,
                            borderRadius: 5,
                            textAlign: "center",
                            padding: "1rem 2rem",
                        }}
                    >
                        <Image
                            src={logo}
                            alt="logo"
                            sx={{
                                animation: allowMotion
                                    ? "spin infinite 20s linear"
                                    : "",
                            }}
                        />

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2rem",
                            }}
                        >
                            <Typography variant="h3">
                                Hello Vite + React + Material UI!
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "1rem",
                                }}
                            >
                                <Button
                                    size="large"
                                    variant="outlined"
                                    onClick={() =>
                                        setCount((count) => count + 1)
                                    }
                                >
                                    <span>
                                        count is:
                                        <span data-testid="count">
                                            {" "}
                                            {count}
                                        </span>
                                    </span>
                                </Button>

                                <IconButton
                                    onClick={() => toggleMode()}
                                    color="warning"
                                    aria-label="Toggle dark mode"
                                >
                                    {mode === THEME_MODE.LIGHT ? (
                                        <LightModeIcon />
                                    ) : (
                                        <DarkModeIcon />
                                    )}
                                </IconButton>
                            </Box>

                            <Typography variant="body1">
                                Edit <code>App.tsx</code> and save to test HMR
                                updates.
                            </Typography>

                            <Typography variant="body2">
                                <Link
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React
                                </Link>
                                {" | "}
                                <Link
                                    href="https://next.material-ui.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn Material UI
                                </Link>
                                {" | "}
                                <Link
                                    href="https://vitejs.dev/guide/features.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vite Docs
                                </Link>
                            </Typography>
                        </Box>
                    </Paper>
                </Container>
            </Grid>
        </ThemeProvider>
    );
};

export default App;
