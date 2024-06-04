import React, { useState } from "react";
import Header from "../../components/Header/Header";

import Footer from "../../components/Footer/Footer";
import Carousel from "./Carousel/Carousel";
import DoiTuong from "./DoiTuong/DoiTuong";
import HocCEH from "./HocCEH/HocCEH";
import LoiThe from "./LoiThe/LoiThe";
import Giatri from "./Giatri/Giatri";
import GiangVien from "./GiangVien/GiangVien";

export default function CEH() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Carousel />
      <DoiTuong />
      <HocCEH />
      <LoiThe />
      <Giatri />
      <GiangVien />
      <Footer />
    </div>
  );
}
