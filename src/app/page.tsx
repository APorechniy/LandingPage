import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { SloganBlock } from '@/sections/SloganBlock';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { Steps } from '@/sections/Steps';
import { ContactForm } from '@/sections/ContactForm';
import { Footer } from '@/sections/Footer';
import './global.css'

export default function Page() {
    return (
      <main>
        <Header />
        <Hero />
        <SloganBlock />
        <Services />
        <Portfolio />
        <Steps />
        <ContactForm />
        <Footer />
      </main>
    );
};
