import Sidebar from './Sidebar';
import Header from './Header';
import HeroSection from '../section/HeroSection';
import AboutSection from '../section/AboutSection';
// import HeroSection from './HeroSection';
// import HeroSection from '../sections/HeroSection';
// import PortfolioSection from '../sections/PortfolioSection';
// dan seterusnya

export default function AppLayout() {
  return (
    <main className="flex flex-col sm:flex-row min-h-screen bg-black text-white p-4">
      <Sidebar />

      <section className="relative flex-1 flex flex-col px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-purple-500/30 rounded-full blur-3xl z-0"></div>

        <Header />

        <div className="relative z-10 mt-16">
          <HeroSection />
        </div>

    
        <AboutSection />
    
      </section>
    </main>
  );
}
