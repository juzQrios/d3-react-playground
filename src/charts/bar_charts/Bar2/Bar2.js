import * as d3 from 'd3';
import React from 'react';
import './Bar2.css';
import PageTemplate from '../../../utils/PageTemplate';

class Bar2 extends React.Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
  }

  componentDidMount() {
  }

  render() {
    return (
      <PageTemplate className="Bar2" title="Bar2">
        <div className="chart" ref={this.chart}></div>
      </PageTemplate>
    );
  }
}

export default Bar2;