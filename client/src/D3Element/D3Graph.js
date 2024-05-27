import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3Graph = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const { width, height } = svg.node().getBoundingClientRect();

    // Clear the SVG
    svg.selectAll('*').remove();

    // Set the dimensions and margins of the graph
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Append the svg object to the body of the page
    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X scale
    const x = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, innerWidth]);

    // Y scale
    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([innerHeight, 0]);

    // Add X axis
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    g.append('g')
      .call(d3.axisLeft(y));

    // Add the line
    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', d3.line()
        .x((d, i) => x(i))
        .y(d => y(d))
      );

  }, [data]);

  return (
    <svg
      ref={svgRef}
      style={{
        width: '100%',
        height: '500px',
      }}
    />
  );
};

export default D3Graph;
