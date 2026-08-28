"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    alert("Login hazırlanır...");
  }

  return (
    <main>
      <h1>Maracana</h1>
      <h2>Giriş yap</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Şifrə"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Giriş yap</button>
      </form>

      <br />

      <a href="/register">
        Hesabın yoxdur? Qeydiyyatdan keç
      </a>
    </main>
  );
}
