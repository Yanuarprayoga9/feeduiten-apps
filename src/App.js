import React from "react";
class App extends React.Component{
  constructor(props){
    super(props);
    console.log("component created")
  }
  render(){
    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1>FEEDUITEN APPS</h1>
              <h4>Rp. 1.500.000,-</h4>
              <span className="title">Sisa uang kamu tersisa 75% lagi</span >
              <hr />
            </div>
          </div>
          <div className="row ">
            <div className="col-6">
              <div className="card-wrapper">
                <div className="icon-wrapper">
                  <i className="bi bi-wallet p-1 rounded"></i>
                </div>
              <span className="title">pemasukan</span>
              <h3>Rp. 2.000.000,-</h3>
              <span className="title text-ungu">50<span className="title">Transaksi</span></span>
              </div>
            </div>

            <div className="col-6">
              <div className="card-wrapper">
                <div className="icon-wrapper">
                  <i className="bi bi-wallet p-1 rounded"></i>
                </div>
              <span className="title">pemasukan</span>
              <h3>Rp. 2.000.000,-</h3>
              <span className="title text-ungu">50<span className="title">Transaksi</span></span>
              </div>
            </div>
            
            <div className="row py-5">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h2 >Ringkasan Transaksi</h2>
                <div className="button-wrp d-flex">
                <div className="wrapper-button px-2">
                  <button className="btn btn-primary">Pemasukan <i class="bi bi-plus-circle"></i></button>
                </div>
                <div className="wrapper-button">
                  <button className="btn btn-danger">Pengeluaran <i class="bi bi-dash-lg"></i></button>
                </div>
                </div>
              </div>
            </div>

            <div className="row bg-primary rounded text-light ">
              <div className="row-12 d-flex justify-content-between align-items-center">
                <div className="d-flex">
                <div className="icon-wrapper d-flex align-items-center px-3">
                <i className="bi bi-wallet p-1 rounded"></i>
                </div>
                <div className="transaction">
                  <h6>Menerima gaji</h6>
                  <span className="title">1 july 2022</span>
                </div>
                </div>
                <div className="money">
                  <h5>Rp. 2.000.000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;
