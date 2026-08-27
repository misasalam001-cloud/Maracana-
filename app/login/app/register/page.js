"use client";

import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    alert("Qeydiyyat sistemi hazırlanır...");
  }

  return (
    <main>
      <h1>Maracana</h1>
      <h2>Qeydiyyatdan keç</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Adınız"
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

      <br />

      <a href="/login">Artıq hesabın var? Daxil ol</a>
    </main>
  );
    }
