import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "./Carousel/Carousel";
import DiemVuotTroi from "./DiemVuotTroi/DiemVuotTroi";
import Lotrinh from "./LoTrinh/LoTrinh";
import NoiDung from "./NoiDung/NoiDung";
import Promotion from "../../components/Promotion/Promotion";

export default function PhatTrienPhanMem() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Carousel />
      <DiemVuotTroi />
      <Promotion />
      <Lotrinh />
      <NoiDung />
      <Footer />
    </div>
  );
}
