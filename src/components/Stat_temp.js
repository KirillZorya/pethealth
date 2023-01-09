import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navigation from "./Navigation";

const data = [
  {
    name: 'Monday',
    Patron: 35,
    Lucia: 36,
    Kluchik: 39,
    Solomka: 32
  },
  {
    name: 'Tuesday',
    Patron: 34,
    Lucia: 36,
    Kluchik: 33,
    Solomka: 34
  },
  {
    name: 'Wednesday',
    Patron: 32,
    Lucia: 36,
    Kluchik: 38,
    Solomka: 36
  },
  {
    name: 'Thursday',
    Patron: 35,
    Lucia: 35,
    Kluchik: 35,
    Solomka: 35
  },
  {
    name: 'Friday',
    Patron: 36,
    Lucia: 35,
    Kluchik: 34,
    Solomka: 33
  },
  {
    name: 'Saturday',
    Patron: 37,
    Lucia: 38,
    Kluchik: 36,
    Solomka: 39
  },
  {
    name: 'Sunday',
    Patron: 34,
    Lucia: 33,
    Kluchik: 35,
    Solomka: 37
  },
];

export default class Stat_temp extends PureComponent {
  render(){
    return (
      
        <LineChart
          width={1500}
          height={700}
          data={data}
          margin={{
            top: 20,
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