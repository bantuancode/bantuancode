import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - Bantuancode",
  description:
    "Kebijakan privasi Bantuancode mengenai pengumpulan, penggunaan, dan perlindungan data pribadi pengguna.",
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Kembali ke Home</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-blue-500/10 rounded-xl">
              <FaShieldAlt className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Kebijakan Privasi
              </h1>
              <p className="text-slate-400 mt-2">
                Terakhir diperbarui: 10 Februari 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-slate max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  Pendahuluan
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Bantuancode (&quot;kami&quot;, &quot;kita&quot;) berkomitmen
                  untuk melindungi privasi Anda. Kebijakan Privasi ini
                  menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
                  melindungi informasi pribadi Anda saat menggunakan layanan
                  kami.
                </p>
              </div>

              {/* Informasi yang Dikumpulkan */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  1. Informasi yang Kami Kumpulkan
                </h2>
                <div className="space-y-4 text-slate-300">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      1.1 Informasi yang Anda Berikan
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Nama lengkap</li>
                      <li>Email dan nomor telepon/WhatsApp</li>
                      <li>Nama universitas dan program studi</li>
                      <li>Detail project/tugas yang ingin dikerjakan</li>
                      <li>File dan dokumen terkait project</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      1.2 Informasi yang Dikumpulkan Secara Otomatis
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Alamat IP</li>
                      <li>Jenis browser dan perangkat</li>
                      <li>Halaman yang dikunjungi di website kami</li>
                      <li>Waktu dan tanggal kunjungan</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Penggunaan Informasi */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  2. Cara Kami Menggunakan Informasi Anda
                </h2>
                <div className="text-slate-300">
                  <p className="mb-3">
                    Kami menggunakan informasi yang dikumpulkan untuk:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Menyediakan layanan pengerjaan tugas coding sesuai
                      permintaan Anda
                    </li>
                    <li>
                      Berkomunikasi dengan Anda mengenai project yang sedang
                      berjalan
                    </li>
                    <li>Mengirimkan invoice dan konfirmasi pembayaran</li>
                    <li>Meningkatkan kualitas layanan kami</li>
                    <li>
                      Mencegah penipuan dan aktivitas yang melanggar hukum
                    </li>
                  </ul>
                </div>
              </div>

              {/* Perlindungan Data */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  3. Perlindungan Data Anda
                </h2>
                <div className="text-slate-300 space-y-3">
                  <p>
                    Kami menerapkan langkah-langkah keamanan untuk melindungi
                    informasi pribadi Anda:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Enkripsi data saat transmisi (SSL/HTTPS)</li>
                    <li>Akses terbatas ke informasi pribadi Anda</li>
                    <li>Backup data secara berkala</li>
                    <li>
                      Tidak membagikan informasi Anda kepada pihak ketiga tanpa
                      izin
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hak Pengguna */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  4. Hak Anda
                </h2>
                <div className="text-slate-300">
                  <p className="mb-3">Anda memiliki hak untuk:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Mengakses dan melihat data pribadi yang kami simpan</li>
                    <li>Meminta koreksi jika data Anda tidak akurat</li>
                    <li>Meminta penghapusan data pribadi Anda</li>
                    <li>Menarik persetujuan penggunaan data kapan saja</li>
                  </ul>
                  <p className="mt-4">
                    Untuk melaksanakan hak-hak ini, silakan hubungi kami melalui
                    WhatsApp atau email.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  5. Cookies
                </h2>
                <div className="text-slate-300">
                  <p>
                    Website kami menggunakan cookies untuk meningkatkan
                    pengalaman pengguna. Cookies adalah file kecil yang disimpan
                    di perangkat Anda. Anda dapat mengatur browser Anda untuk
                    menolak cookies, namun beberapa fitur website mungkin tidak
                    berfungsi dengan baik.
                  </p>
                </div>
              </div>

              {/* Perubahan Kebijakan */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  6. Perubahan Kebijakan Privasi
                </h2>
                <div className="text-slate-300">
                  <p>
                    Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke
                    waktu. Perubahan akan dipublikasikan di halaman ini dengan
                    tanggal &quot;Terakhir diperbarui&quot; yang baru. Kami
                    menyarankan Anda untuk meninjau halaman ini secara berkala.
                  </p>
                </div>
              </div>

              {/* Kontak */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  Hubungi Kami
                </h2>
                <div className="text-slate-300">
                  <p className="mb-4">
                    Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini,
                    silakan hubungi kami:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-white">WhatsApp:</strong>{" "}
                      <a
                        href="https://wa.me/6285182380899"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        +62 851-8238-0899
                      </a>
                    </li>
                    <li>
                      <strong className="text-white">Email:</strong>{" "}
                      <a
                        href="mailto:halobantuancode@gmail.com"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        halobantuancode@gmail.com
                      </a>
                    </li>
                    <li>
                      <strong className="text-white">Website:</strong>{" "}
                      <a
                        href="https://bantuancode.com"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        bantuancode.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
