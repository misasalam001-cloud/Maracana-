"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setMessage("Giriş edilir...");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("Xəta: " + error.message);
      return;
    }

    setMessage("Giriş uğurludur! ✅");
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

      <p>{message}</p>

      <a href="/kayıt">Hesabın yoxdur? Qeydiyyatdan keç</a>
    </main>
  );
}
