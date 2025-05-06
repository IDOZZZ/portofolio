import Image from 'next/image';
import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-full sm:w-1/4">
      <aside className="sticky top-0 h-screen bg-[#1a1a1a] text-white p-6 flex flex-col justify-between rounded-xl shadow-md">
        {/* Atas: Info Profil */}
        <div className="flex flex-col items-center">
          <Image src="/avatar.png" alt="Avatar" className="w-32 h-32 rounded-full mb-4" />
          <h2 className="text-2xl font-bold">Ahmad Tantra</h2>
          <p className="text-sm text-gray-400 mt-1 text-center">
            Next.js Developer & UI/UX Designer<br />and frontend developer
          </p>
          <p className="mt-2 text-gray-500 text-sm">Yogyakarta, Indonesia</p>

          <div className="flex gap-3 mt-4">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-dribbble"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>

          <button className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
            Let&apos;s Work Together!
          </button>
        </div>

        {/* Bawah: Chat Input */}
        <div className="w-full mt-6">
          <form className="flex items-center bg-[#2a2a2a] rounded-full px-4 py-2 shadow-inner">
            <input
              type="text"
              placeholder="Tanya sesuatu..."
              className="bg-transparent outline-none text-sm text-white w-full placeholder-gray-400"
            />
            <button
              type="submit"
              className="ml-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-full transition"
            >
              Kirim
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
}
