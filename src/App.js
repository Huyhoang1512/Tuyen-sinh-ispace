import React from "react";
import "./App.css";
import Home from "./page/Home/Home";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import AnNinhMang from "./page/AnNinhMang/AnNinhMang";
import CEH from "./page/CEH/CEH";
import AWS from "./page/AWS/AWS";
import DangKyNgay from "./page/DangKyNgay/DangKyNgay";
import PhatTrienPhanMem from "./page/PhatTrienPhanMem/PhatTrienPhanMem";
import ThietKeDoHoa from "./page/ThietKeDoHoa/ThietKeDoHoa";
import NotFound from "./page/404/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/an-ninh-mang" element={<AnNinhMang />} />
        <Route path="/khoa-hoc-ceh" element={<CEH />} />
        <Route path="/khoa-hoc-aws" element={<AWS />} />
        <Route path="/dang-ky-ngay" element={<DangKyNgay />} />
        <Route path="/phat-trien-phan-mem" element={<PhatTrienPhanMem />} />
        <Route path="/thiet-ke-do-hoa" element={<ThietKeDoHoa />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

