import Hero from '@/sections/Hero';
import Publications from '@/sections/Publications';
import Awards from '@/sections/Awards';
import Experience from '@/sections/Experience';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <>
      <main className="container">
        <Hero />
        <Publications />
        <Awards />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
