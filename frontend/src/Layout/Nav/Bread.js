import React, { Component } from 'react';

class Bread extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>
        </div>

      </>
    );
  }
}

export default Bread;