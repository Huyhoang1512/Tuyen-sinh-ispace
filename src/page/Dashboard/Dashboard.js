
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Carousel from "./Carousel/Carousel";


export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Carousel />
    </div>
  );
}
