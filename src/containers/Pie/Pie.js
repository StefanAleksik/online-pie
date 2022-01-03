import React from "react";
import * as d3 from "d3";
import { isMobileOnly } from "react-device-detect";

import { connect } from "react-redux";
import {
  incrementOrder,
  addWinner,
  addMsg,
  showConfetti,
  toggleSearch,
} from "../../redux/actions";
import {
  getSlices,
  getPosition,
  getParticipants,
  getWinner,
} from "../../redux/selectors";

import { Ceremony, Winner } from "../../components";

class PieContainer extends React.Component {
  pieChartRef;

  svg = null;
  pieSide = isMobileOnly ? 300 : 650;
  radius = this.pieSide / 2;
  gposition = this.radius * -1;

  componentDidMount() {
    this.renderSvg();
  }

  render() {
    return (
      <React.Fragment>
        <Winner />
        <div className="card col-sm-8 mt-0 mb-auto mx-auto p-0">
          <div
            className="card-img-top p-2 woodPattern"
            ref={(el) => (this.pieChartRef = el)}
          ></div>
          <div className="card-footer bg-transparent">
            <Ceremony />
          </div>
        </div>
      </React.Fragment>
    );
  }

  renderSvg = () => {
    this.svg = d3
      .select(this.pieChartRef)
      .append("svg")
      .attr("width", this.pieSide)
      .attr("height", this.pieSide)
      .attr("class", "mx-auto d-block")
      .append("g")
      .attr(
        "transform",
        "translate(" + this.pieSide / 2 + "," + this.pieSide / 2 + ")"
      );

    let defs_pie = this.svg.append("svg:defs");
    defs_pie
      .append("svg:pattern")
      .attr("id", "pie_pattern")
      .attr("width", this.pieSide)
      .attr("height", this.pieSide)
      .attr("patternUnits", "userSpaceOnUse")
      .attr("x", this.gposition)
      .attr("y", this.gposition)
      .append("svg:image")
      .attr("xlink:href", "./pattern.png")
      .attr("width", this.pieSide)
      .attr("height", this.pieSide)
      .attr("x", 0)
      .attr("y", 0);

    let defs_coin = this.svg.append("svg:defs");
    defs_coin
      .append("svg:pattern")
      .attr("id", "coin_pattern")
      .attr("width", 40)
      .attr("height", 40)
      .attr("patternUnits", "userSpaceOnUse")
      .attr("x", -220)
      .attr("y", -220)
      .append("svg:image")
      .attr("xlink:href", "./coinpattern.png")
      .attr("width", 40)
      .attr("height", 40)
      .attr("x", 0)
      .attr("y", 0);

    this.update(this.props.slices);
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
      .append("g")
      .attr("id", (d) => "g_" + d.data.id)
      .append("path")
      .on("click", (d, data) => {
        let path = d3.select("path#path_" + data.data.id);

        if (!Number(path.attr("clicked"))) {
          path
            .transition()
            .duration(1000)
            .attr("fill-opacity", 0)
            .attr("clicked", 1);

          if (data.data.coin) {
            let coinPosition = d3
              .arc()
              .outerRadius(this.radius - 30)
              .innerRadius(this.radius - 30);

            d3.select("g#g_" + data.data.id)
              .append("circle")
              .attr("transform", function (d) {
                return "translate(" + coinPosition.centroid(d) + ")";
              })
              .attr("fill-opacity", 0)
              .attr("id", "coin_" + data.data.id)
              .style("fill", "url(#coin_pattern)")
              .attr("r", "20");
            this.props.addWinner({
              name: this.props.participants[this.props.position].name,
              pie: data.data.id,
            });
          }
          
          this.props.incrementOrder();

          if (
            this.props.winner &&
            this.props.position === this.props.slices.length
          ) {
            this.props.addMsg("Се бара паричето");
            this.props.toggleSearch(true);
            setTimeout(() => {
              this.props.addMsg(
                "Честитки " + this.props.winner.name + " го доби паричето."
              );
              d3.select("circle#coin_" + this.props.winner.pie).attr(
                "fill-opacity",
                1
              );
              this.props.toggleSearch(false);
              this.props.showConfetti();
            }, 3000);
          }
        }
      })
      .attr("id", (d) => "path_" + d.data.id)
      .attr("clicked", 0)
      .merge(u)
      .transition()
      .duration(1000)
      .attr("d", d3.arc().innerRadius(0).outerRadius(this.radius))
      .style("fill", "url(#pie_pattern)")
      .attr("stroke", "#c0c0c0")
      .style("stroke-width", "2px")
      .attr("stroke-opacity", 0.3);

    u.exit().remove();
  };
}

const mapStateToProps = (state) => {
  const slices = getSlices(state);
  const position = getPosition(state);
  const participants = getParticipants(state);
  const winner = getWinner(state);
  return { slices, position, participants, winner };
};

export const Pie = connect(mapStateToProps, {
  incrementOrder,
  addWinner,
  addMsg,
  showConfetti,
  toggleSearch,
})(PieContainer);
