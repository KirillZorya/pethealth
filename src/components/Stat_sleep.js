import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navigation from "./Navigation";

const data = [
  {
    name: 'Monday',
    Patron: 10,
    Lucia: 15,
    Kluchik: 2,
    Solomka: 12
  },
  {
    name: 'Tuesday',
    Patron: 4,
    Lucia: 11,
    Kluchik: 10,
    Solomka: 19
  },
  {
    name: 'Wednesday',
    Patron: 8,
    Lucia: 8,
    Kluchik: 5,
    Solomka: 12
  },
  {
    name: 'Thursday',
    Patron: 12,
    Lucia: 16,
    Kluchik: 7,
    Solomka: 15
  },
  {
    name: 'Friday',
    Patron: 17,
    Lucia: 15,
    Kluchik: 10,
    Solomka: 11
  },
  {
    name: 'Saturday',
    Patron: 7,
    Lucia: 18,
    Kluchik: 14,
    Solomka: 10
  },
  {
    name: 'Sunday',
    Patron: 11,
    Lucia: 5,
    Kluchik: 10,
    Solomka: 2
  },
];

export default class Stat_sleep extends PureComponent {
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