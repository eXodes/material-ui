const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
    stories: [
        { directory: '../src', files: '*.stories.@(js|jsx|ts|tsx)'},
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
    ],
    features: {
        previewCsfV3: true,
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@emotion/core': toPath('node_modules/@emotion/react'),
            'emotion-theming': toPath('node_modules/@emotion/react'),
            "@": path.resolve(__dirname, "../src"),
        };
        config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx", ".mdx");

        return config;
    },
};
