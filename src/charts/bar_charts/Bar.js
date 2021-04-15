import PageTemplate from '../../utils/PageTemplate';

const Bar = (props) => {
  return (
    <PageTemplate>
      <div className="references">
        <div>
          <a href="https://observablehq.com/@d3/lets-make-a-bar-chart" target="_blank">ObservableHQ: Let's make a bar chart</a>
        </div>
        <div>
          <a href="https://medium.com/@louisemoxy/a-simple-way-to-make-d3-js-charts-svgs-responsive-7afb04bc2e4b" target="_blank">Simple way to make d3js charts responsive</a>
        </div>
        <div>
          <a href="https://observablehq.com/@d3/lets-make-a-bar-chart/3" target="_blank">ObservableHQ: Let's make bar chart, Part 3</a>
        </div>
        <div>
          <a href="https://stackoverflow.com/questions/51258615/reactjs-d3-parse-local-csv-file-and-passing-it-to-state-with-d3-request" target="_blank">Stackoverflow: ReactJS + D3: Parse local CSV file and passing it to state with d3-request
</a>
        </div>
      </div>
    </PageTemplate>
  );
}

export default Bar;