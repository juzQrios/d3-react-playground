import * as d3 from 'd3';
import React from 'react';
import './Bar1.css';
import PageTemplate from '../../../utils/PageTemplate';

class Bar1 extends React.Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
    this.arr = [20, 50, 10, 60, 80];
  }

  componentDidMount() {
    const width = 500
    const x = d3.scaleLinear()
      .domain([0, d3.max(this.arr)])
      .range([0, width]);
    const y = d3.scaleBand()
      .domain(d3.range(this.arr.length))
      .range([0, 50 * this.arr.length]);
    const bar = d3.select(this.chart.current)
      .append('svg')
      .attr('viewBox', `0 0 ${width} ${y.range()[1]}`)
      .attr("font-family", "sans-serif")
      .attr("font-size", "20")
      .attr("text-anchor", "end")
      .selectAll('g')
      .data(this.arr)
      .join('g')
      .attr("transform", (d, i) => `translate(0, ${y(i)})`)
    bar.append('rect')
      .attr('fill', 'steelblue')
      .attr('width', x)
      .attr('height', y.bandwidth() - 1)
    bar.append("text")
      .attr("fill", "white")
      .attr("x", d => x(d) - 3)
      .attr("y", (y.bandwidth() - 1) / 2)
      .attr("dy", "0.35em")
      .text(d => d);
  }

  render() {
    return (
      <PageTemplate className="Bar1" title="Bar1">
        <div className="references">
          <div>
            <a href="https://observablehq.com/@d3/lets-make-a-bar-chart" target="_blank">Let's make a bar chart @observable</a>
          </div>
          <div>
            <a href="https://medium.com/@louisemoxy/a-simple-way-to-make-d3-js-charts-svgs-responsive-7afb04bc2e4b" target="_blank">Simple way to make d3js charts responsive</a>
          </div>
        </div>
        <div className="chart" ref={this.chart}></div>
      </PageTemplate>
    );
  }
}

export default Bar1;