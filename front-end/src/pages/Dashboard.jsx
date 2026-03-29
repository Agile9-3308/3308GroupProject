// src/pages/Dashboard.jsx
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function Dashboard() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        datasets: [
          {
            label: "Ideal",
            data: [40, 30, 20, 10, 0],
            borderColor: "#94a3b8",
            borderDash: [6, 4],
          },
          {
            label: "Actual",
            data: [40, 35, 28, 22, 15],
            borderColor: "#4f46e5",
          },
        ],
      },
    });

    return () => chartInstance.current?.destroy();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <canvas ref={chartRef} />
    </div>
  );
}

export default Dashboard;