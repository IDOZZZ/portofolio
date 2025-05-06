'use client';
import Card from '../components/ui/card';


import { FaUserAstronaut, FaCode, FaRocket } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-white py-20 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Tentang Saya</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="Siapa Saya"
          description="Pembelajar cepat, suka teknologi dan berpikir visioner."
          icon={<FaUserAstronaut />}
        />
        <Card
          title="Apa yang Saya Lakukan"
          description="Membangun aplikasi AI, website, dan tools edukatif."
          icon={<FaCode />}
        />
        <Card
          title="Visi Saya"
          description="Memberi dampak positif lewat solusi digital."
          icon={<FaRocket />}
        />
      </div>
    </section>
  );
}
