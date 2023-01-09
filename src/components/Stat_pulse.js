import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navigation from "./Navigation";

const data = [
  {
    name: 'Monday',
    Patron: 195,
    Lucia: 200,
    Kluchik: 202,
    Solomka: 180
  },
  {
    name: 'Tuesday',
    Patron: 180,
    Lucia: 192,
    Kluchik: 186,
    Solomka: 202
  },
  {
    name: 'Wednesday',
    Patron: 175,
    Lucia: 221,
    Kluchik: 178,
    Solomka: 192
  },
  {
    name: 'Thursday',
    Patron: 195,
    Lucia: 207,
    Kluchik: 197,
    Solomka: 185
  },
  {
    name: 'Friday',
    Patron: 184,
    Lucia: 200,
    Kluchik: 225,
    Solomka: 175
  },
  {
    name: 'Saturday',
    Patron: 201,
    Lucia: 196,
    Kluchik: 175,
    Solomka: 196
  },
  {
    name: 'Sunday',
    Patron: 225,
    Lucia: 240,
    Kluchik: 210,
    Solomka: 195
  },
];

export default class Stat_pulse extends PureComponent {
  render(){
    return (
      
        <LineChart
          width={1500}
          height={700}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Patron" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Lucia" stroke="#e87171" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Kluchik" stroke="#95da7d" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Solomka" stroke="#f0ac5d" activeDot={{ r: 8 }} />
        </LineChart>
        
    );
}
}