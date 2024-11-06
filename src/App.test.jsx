import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
    test("debería renderizar un titulo", () => {
        render(<App />);

        const title = screen.getByRole("heading", { level: 1 });

        expect(title.textContent).toBe("Vite + React");
    })
 
    test("debería renderizar un titulo", async() => {
        render(<App />);

        const title = await screen.findByRole("heading", { level: 1 }); 

        expect(title).toBeInTheDocument();
    })

    test("debería incrementar el contador al hacer click en el botón", async() => {
        render(<App />);

        const button = screen.getByRole("button", { name: "count is 0" });

        await userEvent.click(button);

        const buttonIncremented = screen.getByRole("button", { name: "count is 1" });

        expect(buttonIncremented).toBeInTheDocument();  
    })
});