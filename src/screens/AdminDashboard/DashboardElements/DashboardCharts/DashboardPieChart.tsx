import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DashboardPieChart() {
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
        datasets: [
          {
            label: 'Data Series 1',
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [12, 19, 3, 5, 2],
          },
        ],
      };
  return (
    <div className="w-full flex justify-center bg-purple-400 rounded-lg p-4 my-4 lg:my-0 lg:h-96">
        <Pie data={data} />
    </div>
  )
}

export default DashboardPieChart