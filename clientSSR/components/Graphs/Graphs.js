import React, {Component} from 'react';
import {ScatterChart, BarChart, Bar, Scatter, ZAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data01 = [{x: 100, y: 30}, {x: 325, y: 200}, {x:255, y: 100}, {x: 150, y: 400}, {x: 570, y: 150}, {x: 420, y: 250}];
const data02 = [{x: 130, y: 20}, {x: 250, y: 180}, {x: 275, y: 240}, {x: 200, y: 100}, {x: 320, y: 190}];

const data = [
  {name: 'A - D', uv: 4000, pv: 2400, amt: 2400},
  {name: 'E - H', uv: 3000, pv: 1398, amt: 2210},
  {name: 'H - K', uv: 2000, pv: 9800, amt: 2290},
  {name: 'K - N', uv: 2780, pv: 3908, amt: 2000},
  {name: 'O - R', uv: 1890, pv: 4800, amt: 2181},
  {name: 'S - V', uv: 2390, pv: 3800, amt: 2500},
  {name: 'W - Z', uv: 3490, pv: 4300, amt: 2100},
];

/* My name is Ricky, as far as you know. */

class Graphs extends Component
{
  render()
  {
    return (
    	<div>
        <ScatterChart width = {600} height = {400} margin = {{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid/>
          <XAxis type = 'number' dataKey = {'x'} name = 'stature' unit = ' days'/>
          <YAxis type = 'number' dataKey = {'y'} name = 'weight' unit = ' donations'/>
          <ZAxis range = {[100]}/>
          <Tooltip cursor = {{strokeDasharray: '3 3'}}/>
          <Legend/>
          <Scatter name = 'Donor named Ricky' data = {data01} fill = '#8884d8' line shape = 'triangle'/>
          <Scatter name = 'Donor named Jerry' data = {data02} fill = '#82ca9d' line shape = 'circle'/>
        </ScatterChart>

        <BarChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  }
}

export default Graphs;
