import React from "react";
import "./App.css";
import Home from "./page/Home/Home";
import Dashboard from './page/Dashboard/Dashboard';
import AnNinhMang from "./page/AnNinhMang/AnNinhMang";
import CEH from "./page/CEH/CEH";
import AWS from "./page/AWS/AWS";
import DangKyNgay from "./page/DangKyNgay/DangKyNgay";
import PhatTrienPhanMem from "./page/PhatTrienPhanMem/PhatTrienPhanMem";
import ThietKeDoHoa from "./page/ThietKeDoHoa/ThietKeDoHoa";
import NotFound from "./page/404/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/an-ninh-mang" element={<AnNinhMang />} />
        <Route path="/khoa-hoc-ceh" element={<CEH />} />
        <Route path="/khoa-hoc-aws" element={<AWS />} />
        <Route path="/dang-ky-ngay" element={<DangKyNgay />} />
        <Route path="/phat-trien-phan-mem" element={<PhatTrienPhanMem />} />
        <Route path="/thiet-ke-do-hoa" element={<ThietKeDoHoa />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
