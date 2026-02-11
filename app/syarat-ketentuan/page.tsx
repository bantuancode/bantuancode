import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaFileContract } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan - Bantuancode",
  description:
    "Syarat dan ketentuan penggunaan layanan Bantuancode untuk jasa pembuatan tugas coding mahasiswa.",
};

export default function SyaratKetentuanPage() {
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
            <div className="p-4 bg-green-500/10 rounded-xl">
              <FaFileContract className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Syarat & Ketentuan
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
                  Selamat datang di Bantuancode. Dengan menggunakan layanan
                  kami, Anda menyetujui untuk terikat dengan syarat dan
                  ketentuan berikut. Harap baca dengan seksama sebelum
                  menggunakan layanan kami.
                </p>
              </div>

              {/* Layanan */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  1. Layanan
                </h2>
                <div className="text-slate-300 space-y-3">
                  <p>
                    Bantuancode menyediakan jasa pembuatan dan bantuan tugas
                    coding untuk mahasiswa di bidang Teknik Informatika dan
                    bidang terkait.
                  </p>
                  <p>
                    Layanan yang kami tawarkan meliputi namun tidak terbatas
                    pada:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pengembangan aplikasi web, mobile, dan desktop</li>
                    <li>Machine learning dan data analysis</li>
                    <li>Project cybersecurity dan ethical hacking</li>
                    <li>Networking dan IoT projects</li>
                  </ul>
                </div>
              </div>

              {/* Pemesanan */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  2. Pemesanan dan Pembayaran
                </h2>
                <div className="text-slate-300 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      2.1 Proses Pemesanan
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Pemesanan dilakukan melalui WhatsApp atau form kontak
                        website
                      </li>
                      <li>
                        Client wajib memberikan detail requirements yang jelas
                      </li>
                      <li>
                        Kami akan memberikan estimasi harga dan waktu pengerjaan
                      </li>
                      <li>
                        Project dimulai setelah pembayaran DP (Down Payment)
                        diterima
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      2.2 Pembayaran
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>DP minimal 50% dari total harga</li>
                      <li>
                        Pelunasan dilakukan sebelum source code diserahkan
                      </li>
                      <li>
                        Pembayaran dapat dilakukan via transfer bank atau
                        e-wallet
                      </li>
                      <li>Tidak ada refund setelah pengerjaan dimulai</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pengerjaan */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  3. Proses Pengerjaan
                </h2>
                <div className="text-slate-300 space-y-3">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Estimasi waktu pengerjaan: 3-7 hari tergantung
                      kompleksitas
                    </li>
                    <li>Update progress akan diberikan secara berkala</li>
                    <li>
                      Client dapat meminta preview/demo sebelum final delivery
                    </li>
                    <li>
                      Perubahan requirements setelah pengerjaan dimulai dapat
                      menambah biaya
                    </li>
                  </ul>
                </div>
              </div>

              {/* Revisi */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">4. Revisi</h2>
                <div className="text-slate-300 space-y-3">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Revisi GRATIS jika sesuai dengan requirements awal</li>
                    <li>Revisi maksimal 2x untuk perubahan minor</li>
                    <li>
                      Perubahan requirements atau penambahan fitur dikenakan
                      biaya tambahan
                    </li>
                    <li>
                      Revisi harus diajukan maksimal 3 hari setelah delivery
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hak Cipta */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  5. Hak Cipta dan Kepemilikan
                </h2>
                <div className="text-slate-300 space-y-3">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Source code menjadi milik client setelah pelunasan</li>
                    <li>
                      Kami berhak menggunakan project sebagai portfolio (tanpa
                      data sensitif)
                    </li>
                    <li>
                      Client bertanggung jawab atas penggunaan source code
                    </li>
                    <li>
                      Dilarang menjual kembali source code yang kami buat kepada
                      pihak lain
                    </li>
                  </ul>
                </div>
              </div>

              {/* Kerahasiaan */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  6. Kerahasiaan
                </h2>
                <div className="text-slate-300 space-y-3">
                  <p>Kami berkomitmen menjaga kerahasiaan informasi client:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Data pribadi client tidak akan dibagikan kepada pihak
                      ketiga
                    </li>
                    <li>
                      Source code dan requirements project bersifat konfidensial
                    </li>
                    <li>
                      File project akan dihapus dari server kami setelah 30 hari
                      delivery
                    </li>
                  </ul>
                </div>
              </div>

              {/* Batasan Tanggung Jawab */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  7. Batasan Tanggung Jawab
                </h2>
                <div className="text-slate-300 space-y-3">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Kami tidak bertanggung jawab atas nilai/hasil yang
                      diperoleh client
                    </li>
                    <li>
                      Project yang kami kerjakan adalah untuk keperluan
                      pembelajaran dan referensi
                    </li>
                    <li>
                      Client wajib memahami dan dapat menjelaskan source code
                      yang diberikan
                    </li>
                    <li>
                      Kami tidak bertanggung jawab atas plagiarisme atau
                      pelanggaran akademik
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pembatalan */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  8. Pembatalan
                </h2>
                <div className="text-slate-300 space-y-3">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Client dapat membatalkan order sebelum pengerjaan dimulai
                    </li>
                    <li>
                      Pembatalan setelah DP dibayar: DP tidak dapat dikembalikan
                    </li>
                    <li>
                      Kami berhak membatalkan order jika requirements tidak
                      jelas
                    </li>
                    <li>
                      Kami berhak menolak project yang melanggar hukum atau
                      etika
                    </li>
                  </ul>
                </div>
              </div>

              {/* Force Majeure */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  9. Force Majeure
                </h2>
                <div className="text-slate-300">
                  <p>
                    Kami tidak bertanggung jawab atas keterlambatan atau
                    kegagalan memenuhi kewajiban karena keadaan di luar kendali
                    kami (bencana alam, gangguan internet, sakit, dll). Dalam
                    hal ini, deadline akan disesuaikan.
                  </p>
                </div>
              </div>

              {/* Perubahan S&K */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  10. Perubahan Syarat & Ketentuan
                </h2>
                <div className="text-slate-300">
                  <p>
                    Kami berhak mengubah Syarat & Ketentuan ini kapan saja.
                    Perubahan akan dipublikasikan di halaman ini dengan tanggal
                    pembaruan yang baru. Penggunaan layanan setelah perubahan
                    berarti Anda menyetujui perubahan tersebut.
                  </p>
                </div>
              </div>

              {/* Kontak */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  Hubungi Kami
                </h2>
                <div className="text-slate-300">
                  <p className="mb-4">
                    Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan
                    ini, silakan hubungi kami:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <strong className="text-white">WhatsApp:</strong>{" "}
                      <a
                        href="https://wa.me/6285182380899"
                        className="text-green-400 hover:text-green-300"
                      >
                        +62 851-8238-0899
                      </a>
                    </li>
                    <li>
                      <strong className="text-white">Email:</strong>{" "}
                      <a
                        href="mailto:halobantuancode@gmail.com"
                        className="text-green-400 hover:text-green-300"
                      >
                        halobantuancode@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Acceptance */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <p className="text-slate-300 text-center">
                  <strong className="text-white">
                    Dengan menggunakan layanan Bantuancode, Anda menyatakan
                    telah membaca, memahami, dan menyetujui Syarat & Ketentuan
                    ini.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
