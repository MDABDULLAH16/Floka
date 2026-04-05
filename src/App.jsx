import "./App.css";
import ApproachSection from "./components/ApproachSection/ApproachSection"; 
import LargeTextMarque from "./components/LargeTextMarque/LargeTextMarque";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import StatsCard from "./components/StatsCard/StatsCard";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false, // animation happens only once
    });
  }, []);

  return (
    <div className="bg-[#f5f5f5] px-6 funnel">
      <Navbar></Navbar>
      <VideoBanner></VideoBanner>
      <ApproachSection></ApproachSection>
      <StatsCard></StatsCard>
      <LargeTextMarque></LargeTextMarque>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
