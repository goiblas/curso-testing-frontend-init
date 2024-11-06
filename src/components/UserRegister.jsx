import { useState } from "react";

export function UserRegister({ onRegister }) {
    const [error, setError] = useState(null);

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const formValues = Object.fromEntries(formData.entries());
      
        if (!formValues.name || !formValues.email || !formValues.password) {
            setError("Todos los campos son requeridos");
            return;
        }

        onRegister(formValues);
    }

    return <div>
        <h1>Registarse</h1>
        {error && (<div role="alert" aria-atomic="true">{error}</div>)}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password"  />
            </div>
            <button type="submit">
                Registrarse
            </button>
        </form>
    </div>

}