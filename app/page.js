import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Maracana</h1>
      <p>Rəqəmsal biznes platforması</p>

      <div>
        <Link href="/login">Giriş et</Link>
        <br />
        <br />
        <Link href="/register">Qeydiyyatdan keç</Link>
      </div>
    </main>
  );
    }
