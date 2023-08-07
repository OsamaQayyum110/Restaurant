import Category from "./component/Category";
import Food from "./component/Food";
import HeadlineCards from "./component/HeadlineCards";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeadlineCards />
      <Food />
      <Category/>
  </>
  );
}

export default App;
