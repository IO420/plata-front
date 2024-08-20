"use client";
import { useState } from "react";
import "../../style/global.css";

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Aquí iría la lógica de autenticación, por ejemplo, un fetch para enviar los datos al backend.
      const response = await fakeAuthService(username, password); // Simulación de servicio de autenticación

      if (response.success) {
        // Aquí se manejaría el éxito de la autenticación, como redireccionar al usuario.
        console.log("Autenticación exitosa:", response.data);
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    } catch (err) {
      setError("Ocurrió un error al intentar iniciar sesión. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="classic">
      <form className="form" onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>

        {error && <div className="error">{error}</div>}

        <div className="input">
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de Usuario"
            required
          />
        </div>

        <div className="input">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </div>

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

// Función simulada para autenticación
async function fakeAuthService(username: string, password: string) {
  return new Promise<{ success: boolean; data?: any }>((resolve) => {
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        resolve({ success: true, data: { userId: 1, name: "Admin" } });
      } else {
        resolve({ success: false });
      }
    }, 1000);
  });
}
