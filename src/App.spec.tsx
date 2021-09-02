import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from './App';

describe("App", () => {
    it("Click once should render '1'", async () => {
        render(<App />);

        const button = screen.getByRole("button");
        userEvent.click(button);

        const count = screen.getByTestId("count");

        expect(count.textContent).toBe("1");
    });

    it("Click five times should render '5'", async () => {
        render(<App />);

        const button = screen.getByRole("button");
        for (let i = 0; i < 5; i++) {
            userEvent.click(button);
        }

        const count = screen.getByTestId("count");

        expect(count.textContent).toBe("5");
    });
});
