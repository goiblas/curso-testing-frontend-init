import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserRegister } from "./UserRegister.jsx";

describe("UserRegister", () => {
    test("debería completar el formulario y llamar a la función onRegister", async() => {

        const mockOnRegister = vi.fn();
        render(<UserRegister onRegister={mockOnRegister} />);

        const inputName = screen.getByTestId("Nombre-1");
        const inputEmail = screen.getByLabelText("Email");
        const inputPassword = screen.getByLabelText("Contraseña");
        const submit = screen.getByRole("button", { name: "Registrarse"})

        await userEvent.type(inputName, "Jesús");
        await userEvent.type(inputEmail, "jesus.olazagoitia@gmail.com")
        await userEvent.type(inputPassword, "12345")

        await userEvent.click(submit)

        expect(mockOnRegister).toBeCalledWith({
            email: "jesus.olazagoitia@gmail.com",
            name: "Jesús",
            password: expect.any(String)
        })
    });
});
