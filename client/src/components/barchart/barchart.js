import React, { Component } from 'react';
import * as d3 from "d3";
import {countLetters} from '../../utils/count';
import './barchart.css';

class BarChart extends Component {

    componentDidMount() {
      this.displayBarChart();
    }
    /**
     * update the letter frequncy count
     */
   updateData = function() {
    var text = d3.select("body").select("textarea").node().value;
  
    // calculate the letter count
    var count = countLetters(text);
    count = d3.map(count);
  
    return count;
  };
  
    drawBarChart = () => {
        /* array of all lowercase letters */
    let letters = "abcdefghijklmnopqrstuvwxyz".split("");
    // get the data we want to visualize
    var count = this.updateData();
  
    if (count.keys().length < 1) {
      return;
    }
  
    // retrieve svg
    var svg = d3.select("body").select("svg");
  
  
    var countMin = 0; 
    var countMax = d3.max(count.values());
  

    var margin = {
      top:    15,
      right:  35, 
      bottom: 30,
      left:   10
    };
  
    var bounds = svg.node().getBoundingClientRect();
    var plotWidth = bounds.width - margin.right - margin.left;
    var plotHeight = bounds.height - margin.top - margin.bottom;
  

    var countScale = d3.scaleLinear()
      .domain([countMin, countMax])
      .range([plotHeight, 0])
      .nice(); 
  
    var letterScale = d3.scaleBand().domain(letters).range([0, plotHeight])
     .paddingInner(0.5) // global
  
    var plot = svg.select("g#plot");
  
    if (plot.size() < 1) { 
      plot = svg.append("g")
        .attr("id", "plot")
        .attr("transform", this.translate(margin.left, margin.top));
    }
  
    var bars = plot.selectAll("rect")
      .data(count.entries(), function(d) { return d.key; });

      /**
       * virtual selection of bars and append
       */
    bars.enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return letterScale(d.key);})
      .attr("width", letterScale.bandwidth())
      .attr("y", function(d) { return countScale(d.value);})
      .attr("height", function(d) {
        return plotHeight - countScale(d.value);
      });
  
    bars.transition()
      .attr("y", function(d) { return countScale(d.value);})
      .attr("height", function(d) {
        return plotHeight - countScale(d.value);
      });
  
    bars.exit()
      .transition()
      .attr("y", function(d) { return countScale(countMin);})
      .attr("height", function(d) {
        return plotHeight - countScale(countMin);
      })
      .remove();

    var xAxis = d3.axisBottom(letterScale);
    var yAxis = d3.axisLeft(countScale);
  
    if (plot.select("g#y-axis").size() < 1) {
      // add x-axis
      plot.append("g")
        .attr("id", "x-axis")
        .attr("transform", "translate(0, " + plotHeight + ")")
        .call(xAxis);
  
      // add y-axis
      plot.append("g")
        .attr("id", "y-axis")
        .attr("transform", "translate(" + plotWidth + ", 0)")
        .call(yAxis);
    }
    else {
      plot.select("g#y-axis").call(yAxis);
    }
  };
  
  translate = function(x, y) {
    return "translate(" + String(x) + ", " + String(y) + ")";
  };

  displayBarChart = function() {
  var svg = d3.select("body").select("svg");

  var bounds = svg.node().getBoundingClientRect();


  var border = svg.append("rect")
      .attr("id", "bounds")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", bounds.width)
      .attr("height", bounds.height);

  border = border.attr("rx", 10);
  border = border.attr("ry", 10);

    this.drawBarChart();

    d3.select("body").select("textarea")
    .on("keyup", this.drawBarChart);
    }

    render(){
        return <div id={"#" + this.props.id}></div>
      }
  }
      
  export default BarChart;