import * as d3 from 'd3';
import React from 'react';
import {Link} from 'react-router-dom';

class Bar1 extends React.Component {
  constructor(props) {
    super(props);
    this.message = React.createRef();
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
    const bar = d3.select(this.message.current)
      .style('width', '80%')
      .style('margin', '0 auto')
      .append('svg')
          .attr('width', width)
          .attr('height', y.range()[1])
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
      <div className="Bar">
        <nav>
        <Link to="/">{'< Back'}</Link>
        </nav>
        <header>
          <h1>Bar Chart</h1>
          <ul className="references">
            <a href="https://observablehq.com/@d3/lets-make-a-bar-chart">Let's make a bar chart @observable</a>
          </ul>
          <div className="message" ref={this.message}></div>
        </header>
      </div>
    );
  }
}

export default Bar1;