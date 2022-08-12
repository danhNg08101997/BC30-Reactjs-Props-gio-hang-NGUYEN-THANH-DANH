import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item , xemChiTiet , themGioHang } =this.props;
    return (
      <div className="card text-dark ">
        <img className="card-img-top w-100" src={item.hinhAnh} alt="hinhanh" width={200} height={400}/>
        <div className="card-body" style={{textAlign: 'left',}}>
          <h4 className="card-title">{item.tenSP}</h4>
          <button className="btn btn-success" onClick={()=>{
            xemChiTiet(item)
          }}>Xem Chi Tiết</button>
          <button className="btn btn-danger mx-2" onClick={() => themGioHang(item) }>Thêm Giỏ Hàng</button>
        </div>
      </div>
    );
  }
}
