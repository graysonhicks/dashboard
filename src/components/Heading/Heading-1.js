import React, { Component } from 'react';
import './Heading-1.css';

class HeadingComponent extends Component {
  render() {
    return (
      <div className="Heading">
        <h1 className="heading-1">{this.props.text}</h1>
      </div>
    );
  }
}

export default HeadingComponent;
