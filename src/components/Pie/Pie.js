import React from "react";
import * as d3 from "d3";

class Pie extends React.Component {
  pieChartRef;

  svg = null;
  width = 500;
  height = 500;
  radius = Math.min(this.width, this.height) / 2;

  constructor() {
    super();
  }

  componentDidUpdate() {
    this.update(this.props.pieData);
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
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );

    
    let defs = this.svg.append('svg:defs');
    defs.append("svg:pattern")
    .attr("id", "pie_pattern")
    .attr("width", 500)
    .attr("height", 500)
    .attr("patternUnits", "userSpaceOnUse")
    .attr("x", -250)
    .attr("y", -250)
    .append("svg:image")
    .attr("xlink:href", './pattern.png')
    .attr("width", 500)
    .attr("height", 500)
    .attr("x", 0)
    .attr("y", 0);

    this.update(this.props.pieData);
  };

  update = (data) => {
    let pie = d3
      .pie()
      .value(function (d) {
        return d.value;
      })
      .sort(null);

    let data_ready = pie(data);
    let u = this.svg.selectAll("path").data(data_ready);

    u.enter()
      .append("path")
      .on("click", function(d,self) {
        console.log(self, d)
        d3.select(this).style("fill", "white")
      })
      .merge(u)
      .transition()
      .duration(1000)
      .attr("d", d3.arc().innerRadius(0).outerRadius(this.radius))
      .style("fill", "url(#pie_pattern)")
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 1)

    u.exit().remove();
  };
}

export default Pie;
