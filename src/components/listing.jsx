import React, { Component } from "react";

export default class Listing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4>List</h4>
        <ul>
          {this.props.items.map((todoItem, index) => (
            <li key={index}>{todoItem}</li>
          ))}
        </ul>
      </div>
    );
  }
}
