import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="px-1 py-4">Olá mundo!</h1>
      <button type="button" className="btn btn-primary btn-lg ">Large button</button>

      <br/>
      <p>pulou a linha</p>
    </main>
  );
}
