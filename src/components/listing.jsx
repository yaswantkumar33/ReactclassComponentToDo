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
            <li
              key={index}
              onClick={() => {
                this.props.ondele(index);
                // console.log(this.props);
                console.log(this.props);
              }}
            >
              {todoItem}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
