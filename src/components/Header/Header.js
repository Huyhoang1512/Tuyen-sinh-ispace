import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../../App';

const Header = ({toggleDarkMode}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State cho Dark Mode
  const menuRef = useRef(null);
  const menuRef1 = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen);
  };
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    setIsSubMenuOpen1(false);
  };
  const toggleSubMenu1 = () => {
    setIsSubMenuOpen1(!isSubMenuOpen1);
    setIsSubMenuOpen(false);
  };


  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center" style={{justifyContent:'space-between'}}>
            <div className="">
              <img src='https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-e1661395790159.png' />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/home" className={` hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>Trang chủ</NavLink>
                <div className="relative" ref={menuRef}>
                  <button onClick={toggleSubMenu} className={` hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>Ngành học</button>
                  {isSubMenuOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-xl">
                      <div className="py-1">
                        <NavLink to="/an-ninh-mang" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" >An ninh mạng</NavLink>
                        <NavLink to="/phat-trien-phan-mem" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Phát triển phần mềm</NavLink>
                        <NavLink to="/thiet-ke-do-hoa" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Thiết kế đồ họa</NavLink>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative" ref={menuRef1}>
                  <button onClick={toggleSubMenu1} className={` hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>Khóa ngắn hạn</button>
                  {isSubMenuOpen1 && (
                    <div className="absolute left-3 mt-2 w-48 bg-white border rounded-lg shadow-xl">
                      <div className="py-1">
                        <NavLink to="/khoa-hoc-aws" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">AWS</NavLink>
                        <NavLink to="/khoa-hoc-ceh" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">CEH</NavLink>
                      </div>
                    </div>
                  )}
                </div>
                <NavLink to="/dang-ky-ngay" className={` hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>Đăng ký ngay</NavLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/home" className={` hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>Trang chủ</NavLink>
            <div className="relative" style={{display:'flex'}}>
              <button onClick={toggleSubMenu} className={` hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}style={{height:'40px'}}>Ngành học</button>
              {isSubMenuOpen && (
                <div className=" w-48 bg-white border rounded-lg shadow-xl ml-4">
                  <div className="py-1">
                        <NavLink to="/an-ninh-mang" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">An ninh mạng</NavLink>
                        <NavLink to="/phat-trien-phan-mem" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Phát triển phần mềm</NavLink>
                        <NavLink to="/thiet-ke-do-hoa" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Thiết kế đồ họa</NavLink>
                  </div>
                </div>
              )}
            </div>
            <div className="relative" style={{display:'flex'}}>
              <button onClick={toggleSubMenu1} className={` hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`} style={{height:'40px'}}>Khóa ngắn hạn</button>
              {isSubMenuOpen1 && (
                <div className="w-48 bg-white border rounded-lg shadow-xl ml-4">
                <div className="py-1">
                <NavLink to="/khoa-hoc-aws" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">AWS</NavLink>
                  <NavLink to="/khoa-hoc-ceh" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">CEH</NavLink>
                </div>
              </div>
            )}
          </div>
          <NavLink to="/dang-ky-ngay" className={` hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>Đăng ký ngay</NavLink>
          <div className=" mt-4 ml-4">
        </div>
      </div>
    </div>
    )}
    {/* Toggle Dark Mode/Light Mode Button */}
    <div className="fixed top-20 right-2  items-center">
      <button
      onClick={toggleDarkMode}
      className={`rounded-full p-2 focus:outline-none ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
      >
        <span className={`block w-6 h-6 rounded-full ${isDarkMode ? 'bg-yellow-400' : 'bg-white'}`}></span>
      </button>
    </div>
  </nav>
);
};

export default Header;
