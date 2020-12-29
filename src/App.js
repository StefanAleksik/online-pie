import React from "react";
import * as d3 from "d3";
import "./App.css";

class App extends React.Component {
  pieChartRef;

  componentDidMount() {
    this.renderPieChart();
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-sm-3">Странично мени</div>
          <div className="col-sm-9">
            Пита
            <div ref={el => this.pieChartRef = el}></div>
          </div>
        </div>
      </div>
    );
  }

  renderPieChart() {
    var width = 368;
    var height = 364; //this is the double because are showing just the half of the pie
    var radius = Math.min(width, height) / 2;

    console.log(d3)

    //array of colors for the pie (in the same order as the dataset)
    var color = d3
      .scaleOrdinal()
      .range(["#1d1d1b", "#be1522", "#3aaa35", "#0e71b8", "#f39200"]);

     let data = [
       { label: "Bozo", value: 1 },
       { label: "Laze", value: 1 },
       { label: "Tomi", value: 1 },
       { label: "Kate", value: 1 },
       { label: "Maca", value: 1 },
       { label: "Stef", value: 1 },
       { label: "Marche", value: 1 },
       { label: "Ante", value: 1 },
       { label: "Viski", value: 1 },
       { label: "Buli", value: 1 },
       { label: "Aleksikj", value: 1 },
     ];

     var vis = d3
       .select(this.pieChartRef)
       .append("svg") //create the SVG element inside the <body>
       .data([data]) //associate our data with the document
       .attr("width", width) //set the width and height of our visualization (these will be attributes of the <svg> tag
       .attr("height", height)
       .append("svg:g") //make a group to hold our pie chart
       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"); //move the center of the pie chart from 0, 0 to radius, radius

     var arc = d3
       .arc() //this will create <path> elements for us using arc data
       .innerRadius(0)
       .outerRadius(radius);

     var pie = d3
       .pie() //this will create arc data for us given a list of values

       .padAngle(0.01) // some space between slices
       .sort(null) //No! we don't want to order it by size
       .value(function (d) {
         return d.value;
       }); //we must tell it out to access the value of each element in our data array

     var arcs = vis
       .selectAll("g.slice") //this selects all <g> elements with class slice (there aren't any yet)
       .data(pie) //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
       .enter() //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
       .append("svg:g") //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
       .attr("class", "slice"); //allow us to style things in the slices (like text)

     arcs
       .append("svg:path")
       .attr("fill", function (d, i) {
         return color(i);
       }) //set the color for each slice to be chosen from the color function defined above
       .attr("d", arc); //this creates the actual SVG path using the associated data (pie) with the arc drawing function

     arcs
       .append("svg:text") //add a label to each slice
       .attr("fill", "#fff")
       .attr("transform", function (d) {
         //set the label's origin to the center of the arc
         //we have to make sure to set these before calling arc.centroid
         d.innerRadius = 0;
         d.outerRadius = radius;
         return "translate(" + arc.centroid(d) + ")"; //this gives us a pair of coordinates like [50, 50]
       })
       .attr("text-anchor", "middle") //center the text on it's origin
       .text(function (d, i) {
         return data[i].label;
       }); //get the label from our original data array
  }
}

export default App;
