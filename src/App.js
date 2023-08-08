import Category from "./component/Category";
import Food from "./component/Food";
import HeadlineCards from "./component/HeadlineCards";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeadlineCards />
      <Food />
      <Category />
      <Footer />
  </>
  );
}

export default App;
