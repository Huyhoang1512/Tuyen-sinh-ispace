import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto ">
        <div className="text-center">
          <div className="py-8 relative">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="relative z-10">
              <div className="mx-auto">
                <div className="text-center">
                  <div className="mb-8">
                    <h3 className="text-3xl uppercase" style={{ color: 'rgb(255, 182, 6)' }}>
                      BẠN MUỐN TRỞ THÀNH CHUYÊN GIA CÔNG NGHỆ?
                    </h3>
                    <p style={{ color: 'rgb(255, 182, 6)' }}>
                      Hãy đến với chúng tôi - Trường Cao đẳng An ninh mạng iSPACE - Đơn vị trực thuộc NGS Group.
                    </p>
                    <span className="block w-24 h-1 bg-gray-800 mx-auto mt-2"></span>
                  </div>
                  <div className="text-center">
                    <NavLink to="/dang-ky-ngay"
                      className="text-white py-2 px-4 rounded border"
                      href="https://ispace.edu.vn/lienhe/"
                      style={{ borderColor: 'rgb(255, 182, 6)' }}
                    >
                      Đăng ký ngay
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
