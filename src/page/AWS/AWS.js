import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "./Carousel/Carousel";
import Thongtin from "./Thongtin/Thongtin";
import LoiThe from "../CEH/LoiThe/LoiThe";
import GiangVien from "./GiangVien/GiangVien";
import Noidung from "./NoiDung/Noidung";

export default function AWS() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Carousel />
      <Thongtin />
      <LoiThe />
      <GiangVien />
      <Noidung />
      <Footer />
    </div>
  );
}
