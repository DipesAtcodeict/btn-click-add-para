import React, { Component } from "react";
import ReactDOM from 'react-dom';

export default class App extends Component {

  state={
    inputArea: "",
    btnClickCount: 1
  }

  handleChange = (e) => {
    this.setState({
      inputArea: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.setState({
      btnClickCount: this.state.btnClickCount+1
    })
    this.addInfo();
    this.setState({
      inputArea:''
    })
  }

  addInfo = () => {
    if(this.state.btnClickCount >= 6){
      alert("no more paragraph can be inserted");
    }
    else{
      const Data = () => (
        <div>
          {this.state.inputArea}
        </div>
      );
      let target = `para${this.state.btnClickCount}`;
      ReactDOM.render(<Data />, document.getElementById(target));
    }
  }


  render() {
    return (
      <div className="container mt-5">

        <div id="para1" className="mt-5"></div>
        <div id="para2" className="mt-5"></div>
        <div id="para3" className="mt-5"></div>
        <div id="para4" className="mt-5"></div>
        <div id="para5" className="mt-5"></div>

        <form onSubmit={this.formSubmit} className="mt-5">
          <div className="form-group">
            <textarea className="form-control" onChange={this.handleChange} value={this.state.inputArea}/>

            <div className="d-flex flex-row-reverse mt-5">
              <button type="submit" className="btn btn-warning rounded-circle">Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
