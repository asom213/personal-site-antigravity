import Navbar from './components/Navbar';
import IntroSection from './components/Intro';
import HeroSlider from './components/HeroSlider';
import ProductManager from './components/ProductManager';
import Videography from './components/Videography';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <IntroSection />
        <section id="photography">
          <HeroSlider />
        </section>

        <ProductManager />
        <Videography />
      </main>
      <Footer />
    </>
  );
}

export default App;
