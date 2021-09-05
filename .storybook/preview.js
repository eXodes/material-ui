import { ThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme();

const decoratorsStyles = {
    margin: "1rem"
}

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <div style={decoratorsStyles}>
                    <Story />
            </div>
        </ThemeProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
