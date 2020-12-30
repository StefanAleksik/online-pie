import React from "react";
import * as d3 from "d3";

class Pie extends React.Component {
  pieChartRef;
  
  svg = null
  width = 450;
  height = 450;
  margin = 40;
  radius = Math.min(this.width, this.height) / 2 - this.margin;

  constructor() {
    super();
  }
  
  componentDidUpdate() {
    this.update(this.props.pieData)
  }

  componentDidMount() {
    this.renderSvg();
  }

  render() {
    return <div ref={(el) => (this.pieChartRef = el)}></div>;
  }

  renderSvg = () => {
    this.svg = d3
      .select(this.pieChartRef)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
      this.update(this.props.pieData)
  };

  update = (data) => {

    var pie = d3.pie().value(function (d) {
      return d.value;
    })
    .sort(null)

    var data_ready = pie(data);
    var u = this.svg.selectAll("path").data(data_ready);

    u.enter()
      .append("path")
      .merge(u)
      .transition()
      .duration(1000)
      .attr("d", d3.arc().innerRadius(0).outerRadius(this.radius))
      .attr("fill", function (d) {
        return 'blue' //this.color(d.data.key);
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 1);

    u.exit().remove();
  };
}

export default Pie;
