'use client';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsRadar = () => {
  const data = {
    labels: [
      'Python',
      'SQL',
      'Machine Learning',
      'Data Visualization',
      'Database',
      'Storytelling',
      'Deep Learning',
      'Data Pipeline',
      'Cloud Services',
      'DevOps'
    ],
    datasets: [{
      label: 'Skill Level',
      data: [95, 92, 90, 88, 85, 82, 80, 78, 75, 72],
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'rgba(255, 255, 255, 0.8)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 255, 255, 1)'
    }]
  };

  const options: ChartOptions<'radar'> = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)'
        },
        pointLabels: {
          color: 'white',
          font: {
            size: 14,
            weight: 'normal' as const
          }
        },
        ticks: {
          stepSize: 20,
          color: 'rgba(255, 255, 255, 0.8)',
          backdropColor: 'transparent'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.raw}%`;
          }
        }
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-black/10 backdrop-blur-sm p-8 rounded-xl mb-16">
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillsRadar;