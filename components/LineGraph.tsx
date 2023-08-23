"use client";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const API_URL = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

const formatYAxisTick = (value: number) => {
  return value.toLocaleString();
};

const LineChartComponent = ({ title = "COVID-19 Cases Over Time" }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const { data: historicalData, isLoading } = useQuery({
    queryKey: ["lineChartData"],
    queryFn: async () => {
      const { data } = await axios.get(API_URL);
      return data;
    },
  });

  const caseData = Object.entries(historicalData?.cases || {}).map(([date, cases]) => ({
    date: new Date(date).getFullYear(),
    cases,
  }));

  return (
    <div className='ml-4'>
      <h2 className='text-5xl text-gray-500 font-bold mb-4'>{title}</h2>
      <div className='w-9'>
        {isLoading ? "Loading Cases Data..." : (
          <LineChart width={width / 1.5} height={400} data={caseData} margin={{ left: 80 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={formatYAxisTick} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cases" name="Cases" stroke="blue" />
          </LineChart>
        )}
      </div>
    </div>
  );
};

export default LineChartComponent;
