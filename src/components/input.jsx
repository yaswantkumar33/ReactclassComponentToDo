import React, { Component } from "react";

export default class input extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }
  render() {
    return (
      <div className="form">
        <input
          onChange={this.props.changehandeler}
          type="text"
          value={this.props.text}
        />
        <button onClick={this.props.additem}>
          <span>Add</span>
        </button>
      </div>
    );
  }
}
