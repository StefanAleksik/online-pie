import React from "react";
import * as d3 from "d3";

class Pie extends React.Component {
  pieChartRef;

  svg = null;
  width = 500;
  height = 500;
  radius = Math.min(this.width, this.height) / 2;

  componentDidUpdate() {
    this.update(this.props.pieData);
  }

  componentDidMount() {
    this.renderSvg();
  }

  render() {
    return (
      <div className="card col-sm-7 m-auto p-0">
        <div
          className="card-img-top p-5 woodPattern"
          ref={(el) => (this.pieChartRef = el)}
        ></div>
        <div className="card-footer bg-transparent">Footer</div>
      </div>
    );
  }

  renderSvg = () => {
    this.svg = d3
      .select(this.pieChartRef)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("class", "mx-auto d-block")
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );

    let defs = this.svg.append("svg:defs");
    defs
      .append("svg:pattern")
      .attr("id", "pie_pattern")
      .attr("width", 500)
      .attr("height", 500)
      .attr("patternUnits", "userSpaceOnUse")
      .attr("x", -250)
      .attr("y", -250)
      .append("svg:image")
      .attr("xlink:href", "./pattern.png")
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
      .on("click",  (d, data) =>{
        console.log( d, this, data);
        d3.select("path#" + data.data.id).transition().duration(1000).attr('fill-opacity', 0);
      })
      .attr("id", (d) => d.data.id)
      .merge(u)
      .transition()
      .duration(1000)
      .attr("d", d3.arc().innerRadius(0).outerRadius(this.radius))
      .style("fill", "url(#pie_pattern)")
      .attr("stroke", "#c0c0c0")
      .style("stroke-width", "2px")
      .attr("stroke-opacity", 0.1)
      .style("opacity", 1);

    u.exit().remove();
  };
}

export default Pie;
