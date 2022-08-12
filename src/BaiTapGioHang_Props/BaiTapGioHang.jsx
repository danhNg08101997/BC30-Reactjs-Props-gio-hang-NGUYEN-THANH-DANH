import React, { Component } from "react";
import ExerciseCart from "./ExerciseCart";

export default class BaiTapGioHang extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-success mt-2">Bài Tập Giỏ Hàng</h3>
        <ExerciseCart />
      </div>
    );
  }
}
