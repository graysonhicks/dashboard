import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import './UserLine.css';

const settings = {
     labels: ['January', 'February', 'March'],
     datasets: [
         {
             label: 'My First dataset',
             fill: false,
             lineTension: 0.1,
             backgroundColor: 'rgba(75,192,192,0.4)',
             borderColor: 'rgba(75,192,192,1)',
             borderCapStyle: 'butt',
             borderDash: [],
             borderDashOffset: 0.0,
             borderJoinStyle: 'miter',
             pointBorderColor: 'rgba(75,192,192,1)',
             pointBackgroundColor: '#fff',
             pointBorderWidth: 1,
             pointHoverRadius: 5,
             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
             pointHoverBorderColor: 'rgba(220,220,220,1)',
             pointHoverBorderWidth: 2,
             pointRadius: 1,
             pointHitRadius: 10
         }
     ]
}

class UserLineComponent extends Component {
    constructor(props) {
       super(props);

       settings.datasets[0].data = this.props.stat.data.datasets[0].data
     }

  render() {
    return (
      <Line data={settings} redraw></Line>
    );
  }
}

export default UserLineComponent;
