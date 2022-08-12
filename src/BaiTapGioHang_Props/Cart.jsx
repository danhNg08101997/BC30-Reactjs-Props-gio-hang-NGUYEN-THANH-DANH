import React, { Component } from "react";

export default class Cart extends Component {

  // // 
  // tangSoLuong = (count, setCount) => {
  //   count = count + 1
  //   return setCount(count)
  // }

  // giamSoLuong = (count, setCount) => {
  //   if(count > 0){
  //     count = count -1
  //     return setCount(count)
  //   }
  // }
  // // 

  render() {
    const { gioHang , xoaGioHang , tangGiamSoLuong } = this.props;
    return (
      // <!-- Modal -->
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ right: "150px", width: "800px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẫm</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((spGH, index) => {
                    return (<tr key={index}>
                        <td>{spGH.maSP}</td>
                        <td>
                          <img src={spGH.hinhAnh} width={50} height={50} />
                        </td>
                        <td>{spGH.tenSP}</td>
                        <td>
                          <button onClick={()=> tangGiamSoLuong(spGH.maSP,true)} className="btn btn-primary" style={{fontSize:'15px',margin:'0 5px',padding:'0',width:'25px',height:'25px'}}> + </button>
                          {spGH.soLuong}
                          <button onClick={()=> tangGiamSoLuong(spGH.maSP,false)} className="btn btn-primary" style={{fontSize:'15px',margin:'0 5px',padding:'0',width:'25px',height:'25px'}}> - </button>
                        </td>
                        <td>{spGH.giaBan.toLocaleString()}.$</td>{/* toLocaleString() : hàm để chuyển 10000 => 10.000 */}
                        <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}.$</td>
                        <td><button className="btn btn-danger" onClick={()=>{xoaGioHang(spGH.maSP)}}>Xoá</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
