import { useState } from "react";
import logo from "@/assets/logo.svg";
import "@/App.css";
import { Paper, Button, Grid, Container, Link, Typography, Box, useMediaQuery, styled } from "@material-ui/core";

const Image = styled("img")(() => ({
    height: "40vmin",
    pointerEvents: "none",
}));

const App = () => {
    const [count, setCount] = useState(0);
    const allowMotion = useMediaQuery("(prefers-reduced-motion: no-preference)");

    return (
        <Grid
            container
            sx={{
                backgroundColor: "#f6f9ff",
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
                        textAlign: "center",
                        padding: "1rem 2rem",
                    }}
                >
                    <Image
                        src={logo}
                        alt="logo"
                        sx={{
                            animation: allowMotion ? "spin infinite 20s linear" : "",
                        }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                        }}
                    >
                        <Typography variant="h3">Hello Vite + React + Material UI!</Typography>

                        <Box>
                            <Button
                                variant="contained"
                                disableElevation
                                type="button"
                                onClick={() => setCount((count) => count + 1)}
                            >
                                count is: <span data-testid="count">{count}</span>
                            </Button>
                        </Box>

                        <Typography variant="body1">
                            Edit <code>App.tsx</code> and save to test HMR updates.
                        </Typography>

                        <Typography variant="body2">
                            <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                                Learn React
                            </Link>
                            {" | "}
                            <Link href="https://next.material-ui.com" target="_blank" rel="noopener noreferrer">
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
    );
};

export default App;
