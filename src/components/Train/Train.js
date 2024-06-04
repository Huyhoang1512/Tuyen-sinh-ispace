import React from 'react'
import { NavLink } from 'react-router-dom'
  export default function Train({isDarkMode}) {
  return (
  <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 " id="features">
    <div className="max-w-screen-xl mx-auto">
      <h3 className="leading-none  text-3xl font-semibold text-center" style={{color:'#ffb606'}}>
      CHƯƠNG TRÌNH ĐÀO TẠO CHỈ 2 NĂM 3 THÁNG
      </h3>
      <div className="flex flex-col items-center flex-wrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between">
        <NavLink to="/an-ninh-mang" className="xl:w-2/12 sm:w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-5 lg:p-8 lg:mx-2 xl:p-5 text-center" style={{width:'100%'}} >
          <div className="p-4 inline-block bg-indigo-200 rounded-lg">
            <img src='https://ispace.edu.vn/wp-content/uploads/2021/03/ANM_3.png' />
          </div>
          <div className="mt-4 font-extrabold text-lg tracking-wide" style={{color:`${isDarkMode ? "black" :"text-blue-400"}`}}>
          AN NINH MẠNG
          </div>
          <div className="text-base font-semibold mt-5" style={{color:`${isDarkMode ? "#ffb606" :"#ffb606"}`}}>
            Đăng ký
          </div>
        </NavLink>
        <NavLink  to="/phat-trien-phan-mem" className="xl:w-2/12 sm:w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-5 lg:p-8 lg:mx-2 xl:p-5 text-center" style={{width:'100%'}}>
          <div className="p-4 inline-block bg-indigo-200 rounded-lg">
            <img src='https://ispace.edu.vn/wp-content/uploads/2021/03/PTPM_3.png' />
          </div>
          <div className="mt-4 font-extrabold text-lg tracking-wide" style={{color:`${isDarkMode ? "black" :"text-blue-400"}`}}>
          PHÁT TRIỂN PHẦN MỀM
          </div>
          <div className="text-base font-semibold mt-5" style={{color:`${isDarkMode ? "#ffb606" :"#ffb606"}`}}>
            Đăng ký
          </div>
        </NavLink>
        <NavLink to="/thiet-ke-do-hoa" className="xl:w-2/12 sm:w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-5 lg:p-8 lg:mx-2 xl:p-5 text-center" style={{width:'100%'}}>
          <div className="p-4 inline-block bg-indigo-200 rounded-lg">
            <img src='https://ispace.edu.vn/wp-content/uploads/2021/03/TKDH_3.png' />
          </div>
          <div className="mt-4 font-extrabold text-lg tracking-wide" style={{color:`${isDarkMode ? "black" :"text-blue-400"}`}}>
            THIẾT KẾ ĐỒ HỌA
          </div>
          <div className="text-base font-semibold mt-5" style={{color:`${isDarkMode ? "#ffb606" :"#ffb606"}`}}>
            Đăng ký
          </div>
        </NavLink>
        <NavLink to="/khoa-hoc-ceh" className="xl:w-2/12 sm:w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-5 lg:p-8 lg:mx-2 xl:p-5 text-center" style={{width:'100%'}}>
          <div className="p-4 inline-block bg-indigo-200 rounded-lg">
            <img src='https://ispace.edu.vn/wp-content/uploads/2024/02/1-1.png' />
          </div>
          <div className="mt-4 font-extrabold text-lg tracking-wide" style={{color:`${isDarkMode ? "black" :"text-blue-400"}`}}>
          QUẢN TRỊ MẠNG
          </div>
          <div className="text-base font-semibold mt-5" style={{color:`${isDarkMode ? "#ffb606" :"#ffb606"}`}}>
            Đăng ký
          </div>
        </NavLink>
        <NavLink to="/khoa-hoc-aws" className="xl:w-2/12 sm:w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-5 lg:p-8 lg:mx-2 xl:p-5 text-center" style={{width:'100%'}}>
          <div className="p-4 inline-block bg-indigo-200 rounded-lg">
            <img src='https://ispace.edu.vn/wp-content/uploads/2024/02/1-1.png' />
          </div>
          <div className="mt-4 font-extrabold text-lg tracking-wide" style={{color:`${isDarkMode ? "black" :"text-blue-400"}`}}>
          THƯƠNG MẠI ĐIỆN TỬ
          </div>
          <div className="text-base font-semibold mt-5" style={{color:`${isDarkMode ? "#ffb606" :"#ffb606"}`}}>
            Đăng ký
          </div>
        </NavLink>
        <NavLink to="/dang-ky-ngay" className="xl:w-2/12 sm:w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-5 lg:p-8 lg:mx-2 xl:p-5 text-center" style={{width:'100%'}}>
          <div className="p-4 inline-block bg-indigo-200 rounded-lg">
            <img src='https://ispace.edu.vn/wp-content/uploads/2024/02/1-1.png' />
          </div>
          <div className="mt-4 font-extrabold text-lg tracking-wide" style={{color:`${isDarkMode ? "black" :"text-blue-400"}`}}>
          ĐĂNG KÝ NGAY
          </div>
          <div className="text-base font-semibold mt-5" style={{color:`${isDarkMode ? "#ffb606" :"#ffb606"}`}}>
            Đăng ký
          </div>
        </NavLink>
      </div>
    </div>
  </div>
  )
}
