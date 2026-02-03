import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero'; // Video Background
import MainSlider from '@/components/MainSlider/MainSlider';

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', zIndex: 1 }}>
      <Header />

      {/* Background Layer: Wave Animation */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Hero />
      </div>

      {/* Foreground Layer: Content */}
      <MainSlider />
    </main>
  );
}
