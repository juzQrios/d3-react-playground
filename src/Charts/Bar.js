import * as d3 from 'd3';
import React from 'react';

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.message = React.createRef();
  }

  componentDidMount() {
    d3.select(this.message.current).html('Hello World from D3');
  }

  render() {
    return (
      <div className="Bar">
        <header>
          <h1>Bar Chart</h1>
          <div className="message" ref={this.message}></div>
        </header>
      </div>
    );
  }
}

export default Bar;