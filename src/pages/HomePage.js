import React, { useState, useEffect } from 'react';
import app from "../base.js";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import Home from '../Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,CardColumns ,Button } from 'react-bootstrap';



const HomePage = () => {
  const data = [
    { name: "Monday", Reservations: 50 },
    { name: "Tuesday", Reservations: 80 },
    { name: "Wednesday", Reservations: 48},
    { name: "Thursday", Reservations: 100},
    { name: "Friday", Reservations: 88},
    { name: "Saturday", Reservations: 90},
    { name: "Sunday", Reservations: 130},
  ];

  return (

    <div class="border border-primary" >
  
   
   

      <h1>Dashboard</h1>

      <div class="container">
  <div class="row">
    <div class="col-lg- border border-dange">
    
    <PieChart width={500} height={500}>
          <Pie
            dataKey="Reservations"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#ba000d"
            label
          />
          <Tooltip />
        </PieChart>
    </div>
    <div class="col-lg- border border-dange">
    <div>
        <br></br>
      </div>
    <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Reservations" fill="#3949ab"  background={{ fill: "#eee" }} />
        </BarChart>
    </div>
    
  </div>
</div>
      
    </div>
  );
};

export default HomePage;