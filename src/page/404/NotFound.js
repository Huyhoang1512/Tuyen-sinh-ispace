import React from 'react'
import { NavLink } from 'react-router-dom'
  export default function NotFound() {
  return (
  <section className="page_404">
    <div className="container">
      <div className="row">	
        <div className="col-sm-12 ">
          <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
              <h1>Lỗi 404</h1>
            </div>
            <div>
              <p>Trang bạn đang tìm kiếm không có sẵn!!</p>
              <NavLink to="/home" className="link_404">Trang chủ</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

