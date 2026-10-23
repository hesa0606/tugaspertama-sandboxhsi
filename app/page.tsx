import link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Logo */}
      <div className="fixed inset-x-0 top-28 -z-10 flex justify-center opacity-10 pointer-events-none select-none"></div>
      <div className="max-w-5xl mx-auto"></div>

      {/* Konten Utama */}
      <main className="relative z-10 flex flex-col items-center text-center max-w-3xl px-4">
        <h1 className="text-3xl font-bold mb-4">Selamat Datang di Hesa Print Online,</h1>
        <p className="text-lg mb-6 animate-fade-in">
          Silakan ajukan pesanan anda lewat menu <span className="underline">Etalase Toko</span>{" "}
          kami
        </p>
      </main>
    </div>
  );
}
