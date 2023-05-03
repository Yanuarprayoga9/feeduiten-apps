import React from "react";
class App extends React.Component{
  constructor(props){
    super(props);
    console.log("component created")
  }
  render(){
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>FEEDUITEN APPS</h1>
              <h4>Rp. 1.500.000,-</h4>
              <span className="title">Sisa uang kamu tersisa 75% lagi</span >
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="card-wrapper">
                <div className="icon-wrapper">
                  <i className="bi bi-wallet"></i>
                </div>
              <span className="title">pemasukan</span>
              <h3>Rp. 2.000.000,-</h3>
              <span className="title text-ungu">50<span className="title">Transaksi</span></span>
              </div>
            </div>

            <div className="col-6">
              <div className="card-wrapper">
                <div className="icon-wrapper">
                  <i className="bi bi-wallet"></i>
                </div>
              <span className="title">pemasukan</span>
              <h3>Rp. 2.000.000,-</h3>
              <span className="title text-ungu">50<span className="title">Transaksi</span></span>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h2>Ringkasan Transaksi</h2>
                <div className="wrapper-button">
                  <button>Pemasukan <i class="bi bi-plus-circle"></i></button>
                </div>
                <div className="wrapper-button">
                  <button>Pengeluaran <i class="bi bi-dash-lg"></i></button>
                </div>
              </div>
            </div>

            <div className="row"></div>
          </div>
        </div>
      </>
    )
  }
}

export default App;
