"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setMessage("Qeydiyyat edilir...");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name, phone },
      },
    });

    if (error) {
      setMessage("Xəta: " + error.message);
      return;
    }

    setMessage("Qeydiyyat uğurludur! Emailini yoxla. ✅");
  }

  return (
    <main>
      <h1>Maracana</h1>
      <h2>Qeydiyyatdan keç</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Ad"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="tel"
          placeholder="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br /><br />

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
          minLength={6}
          required
        />
        <br /><br />

        <button type="submit">Qeydiyyatdan keç</button>
      </form>

      <p>{message}</p>

      <Link href="/login">Artıq hesabın var? Giriş et</Link>
    </main>
  );
}
