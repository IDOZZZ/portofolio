'use client';

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-start min-h-[80vh] px-6 md:px-12 relative z-10 pb-32">
      {/* Welcome text */}
      <span className="text-sm md:text-base text-purple-400 mb-2">👋 Welcome</span>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
        I&apos;m <span className="text-white">Ahmad Tantra</span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-8">
        Next.js Developer & UI/UX Designer
      </h2>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition">
          My Works
        </button>
        <button className="border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition">
          Download CV
        </button>
      </div>
    </section>
  );
}
