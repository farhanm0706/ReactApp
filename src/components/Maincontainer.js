// MainContainer.js
import React from 'react';
import './main-container.css';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { ResponsiveContainer, Rectangle, Bar, BarChart, XAxis, YAxis, Legend } from 'recharts';
import Sidebar from './Sidebar';


const data1 = [
  { name: 'Sunday', series1: 1800, series2: 7000 },
  { name: 'Monday', series1: 2100, series2: 2500 },
  { name: 'Tuesday', series1: 5010, series2: 8000 },
  { name: 'Wednesday', series1: 3000, series2: 4500 },
  { name: 'Thursday', series1: 1000, series2: 1800 },
  { name: 'Friday', series1: 1500, series2: 5000 },
  { name: 'Saturday', series1: 6000, series2: 8000 },
  // ... more data
];
const dataArray = [
  {
    name: "Jan",
    callData: 11000,
  },
  {
    name: "Feb",
    callData: 4000,
  },
  {
    name: "March",
    callData: 14000,
  },
  {
    name: "April",
    callData: 5000,
  },
  {
    name: "May",
    callData: 1000,
  },
  {
    name: "June",
    callData: 6000,
  },
  {
    name: "July",
    callData: 1000,
  },
  {
    name: "Aug",
    callData: 9000,
  },
  {
    name: "Sep",
    callData: 4000,
  },
  {
    name: "Oct",
    callData: 1000,
  },
  {
    name: "Nov",
    callData: 10000,
  },
  {
    name: "Dec",
    callData: 9000,
  }
];
const COLORS = ['#0cdf15', 'red', 'blue', 'yellow']; // Add more colors if needed
const data = [
  { name: 'Available', value: 65 },
  { name: 'away', value: 0 },
  { name: 'Busy', value: 17 },
  { name: 'Absent', value: 17 }
  // ... more data
];


const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  const cornerRadius = 10; // Adjust the radius as needed

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      radius={[cornerRadius, cornerRadius, 0, 0]}
    />
  );
};


const MainContainer = () => {
  const buttonValues = ['7 Days', '15 Days', '30 Days', '90 Days', 'Custom'];
  const currentValue = '30 Days';


  return (
    <><Sidebar />
      <div className="main-container">
        {/* Add your main content containers here */}
        <div className="content-container">
          <div className='filterDays'>
            {buttonValues.map((value, index) => (
              <button key={index} className={value === currentValue ? 'currentClass' : ''}>{value}</button>
            ))}
          </div>
          <div className='filter-right'>
            <button className='filter-name'>Filter</button>
            <select className='filter-all'>
              <option defaultValue>All</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>

        <div className='call-statistics-container'>
          <div className='call-month-details'>
            <h4>Call statistics</h4>
            <h5>May 2022</h5>
          </div>

          <div className='sort-area'>
            <p className='sort-name'>Sort By:</p>
            <select className='sort'>
              <option defaultValue>Monthly</option>
              <option>Weekly</option>
              <option>Yearly</option>
            </select>
          </div>

          <div>

            <ResponsiveContainer width="75%" aspect={3}>
              <BarChart data={dataArray} width={800} height={250}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="callData" fill='#1876d4' barSize={20} shape={<CustomBar />} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div></div>
        </div>

        <div className='call-container'>
          <div className='call-container-one'>
            <h3>Call Logs Stats</h3>
            <div className='details'>
              <div className="column1">
                <p>No. of Inbound Calls</p>
                <p>No. of Outbound Calls</p>
                <p>No. of Unanswered Calls</p>
                <p>No. of Missed Calls</p>
              </div>
              <div className="column2">
                <p>09</p>
                <p>08</p>
                <p>02</p>
                <p>15</p>
              </div>
            </div>
          </div>

          <div className='call-container-two'>
            <h3>Agent Stats</h3>
            <div className='pie-chart-area'>
              <div className='pie-chart1'>

                <PieChart width={200} height={200}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
              <div className='pie-chart-desc'>
                <div className='pie-col1'>
                  <p className='available'></p>
                  <p className='away'></p>
                  <p className='busy'></p>
                  <p className='absent'></p>
                </div>
                <div className='pie-col2'>
                  <p>Available</p>
                  <p>Away</p>
                  <p>Busy</p>
                  <p>Absent</p>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className='call-distribution'>
          <h3>Call Distribution</h3>
          <div className='double-chart'>
            <BarChart width={900} height={250} data={data1}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar barSize={20} dataKey="series1" fill="green" name="Inbound Calls" shape={<CustomBar />} />
              <Bar barSize={20} dataKey="series2" fill="#1876d4" name="Outbound Calls" shape={<CustomBar />} />
            </BarChart>

          </div>

        </div>
      </div></>
  );
};

export default MainContainer;
