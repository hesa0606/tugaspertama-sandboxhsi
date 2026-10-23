"use client";
import {useRouter} from "next/navigation";
import Link from "next/link";


export default function TentangPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
      <p className="text-lg text-center max-w-2xl">
        Selamat datang di Hessa Print, TokoPrint Online! Kami adalah platform cetak online rumahan
        yang menyediakan layanan cetak dari rumah plus layanan delivery sampai di depan pintu rumah,
        anda cukup duduk ngopi dirumah, barang/pesanan akan kami antar.kami berkomitmen untuk
        memberikan hasil cetak yang memuaskan dan layanan pelanggan yang terbaik.
      </p>

      <div className="flex gap-4">
        {/* Navigasi ke halaman Blog */}
        <button
          onClick={() => router.push('/blog')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Lihat Blog
        </button>

        {/* Tombol Kembali ke Halaman beranda */}
        <button
          onClick={() => router.push ('/')}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}
