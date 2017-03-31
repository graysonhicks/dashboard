import React, { Component } from 'react';

var headingStyles = {
    'fontWeight' : 'bold',
    'fontSize' : '32px',
    'color': '#2B2B2B',
    'borderBottom': '1px solid #2B2B2B'
}

class HeadingComponent extends Component {
  render() {
    return (
      <div className="Heading">
        <h1 style={ headingStyles }>{this.props.text}</h1>
      </div>
    );
  }
}

export default HeadingComponent;
