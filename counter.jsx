import React, { Component } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";



import img from './img.jpg';
console.log(img);


class Counter extends Component {
  state = {
    startDate: new Date(),
    timestart: "",
    timeend: "",
    description: "",
    showform1: true,
    showform2: false,
  };


  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  onChangeStartTime = (timestart) => this.setState({ timestart });
  onChangeEndTime = (timeend) => this.setState({ timeend });
  handleDescripionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  save = () => {
    this.setState({
      showform1: false,
      showform2: true,
    });
  };
  addMeeting = () => {
    this.setState({
      showform1: true,
      showform2: false,
    });
  };
  increamentDate = () => {
    this.setState((startDate) =>this.state.startDate.getDate() + 1)
  };
  decrementDate = () => {
    this.setState((startDate) => this.state.startDate.getDate() - 1);
  };
  render() {
    return (
      (this.state.showform1 && (
          <div class="container">
              <div class="col-lg-3"></div>
              <div class="col-lg-6">   
        <form class="border border-dark">
          <div  class="form-group">
          <div class="row">
          <div class="col-lg-10"><label>Meeting Date</label></div></div>
          <div class="row">
          <div class="col-lg-10">
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
            </div>
          </div>
          </div>
          <div class="form-group">
          <div class="row">
          <div class="col-lg-3"><label>Start Time</label></div>
          <div class="col-lg-3"><label>End Time</label></div>
          <div class="col-lg-6"></div>
          </div>
          <div class="row">
              <div class="col-lg-3">
            <TimePicker
              onChange={this.onChangeStartTime}
              value={this.state.timestart}
            />
            </div>
            <div class="col-lg-3">
            <TimePicker
              onChange={this.onChangeEndTime}
              value={this.state.timeend}
            />
            </div>
            <div class="col-lg-6"></div>
          </div>
          </div>
          <div class="form-group">
          <div class="row">
          <div class="col-lg-10"><label>Description</label></div></div>
          <div class="row">
              <div class="col-lg-8">
            <textarea
              name="Description"
              onChange={(event) => this.handleDescripionChange(event)}
              value={this.state.description}
            />
            </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                <button class="btn btn-success" onClick={this.save}>Save</button></div>
                <div class="col-lg-6"></div>
            </div>
          </div>
        </form>
        </div>
        </div>
      )) ||
      (this.state.showform2 && (
        <div class="container">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">  
        <form class="border border-dark">

          <div class="form-group">
              <div class="col-lg-4"></div>
              <div class="col-lg-8">
          <span class="glyphicon glyphicon-chevron-left btn btn-info" onClick={this.decrementDate}></span>
            <span class="mx-auto bg-warning border border-dark">
              {this.state.startDate.getDate()}-{this.state.startDate.getMonth()}
              -{this.state.startDate.getFullYear()}
            </span>
            <span class="glyphicon glyphicon-chevron-right btn btn-info" onClick={this.increamentDate}></span>
          </div>
          </div>
          <div class="form-group">
          <div class="col-lg-2"></div>
              <div class="col-lg-4">
                <span>{this.state.timestart}-{this.state.timeend}</span>
              </div>
              <div class="col-lg-6">
      <span>Meeting with {this.state.description} scheduled</span>  
              </div>
          </div>
          <br/>
          <div class="row">
              <div class="col-lg-4"></div>
              <div class="col-lg-8">
            <button class="btn btn-success" onClick={this.addMeeting}>Add Meeting</button>
          </div>
          </div>
        </form>
        </div>
        </div>
      ))
    );
  }
}

export default Counter;
