import { Bar } from "react-chartjs-2";

type BarChartProps = {
  chartData: any;
}

export const BarChart = ({ chartData }: BarChartProps) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Ethereum / Bitcoin"
            },
            legend: {
              display: false
            },
            zoom: {
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true
                },
                mode: 'xy',
              }
            }
          },
          scales: {
            y: {
              min: 0,
              max: 0.1,
            }
          }
        }}
        data={chartData}
      />
    </div>
  );
};