import { useRouteData } from "~/hooks/useRouteData"
import React from 'react';
import type { V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import csvPath from '../../data/prices.csv';



export default function Index() {
  // Doesn't quite work but could
  const data = useRouteData('routes/priceHistory/1.json')
  console.log(data)
   React.useEffect(() => {
    console.log(data)



    // create chart
    const ctx = document.getElementById('priceChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Price',
          data: prices,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'day'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  });

    return(
    <>
      <h1>Price Graph</h1>
      <canvas id="priceChart"></canvas>
    </>
  );
}
