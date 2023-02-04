import React from "react";
import { Line } from "react-chartjs-2";
import { useStateContext } from "../../context/themeContext";

const Chartt = ({ topic, chartdata }) => {
  const { currentTheme, DarkMode } = useStateContext();

  return (
    <div className={`bg-${DarkMode ? "dark" : "light"} text-light`}>
      <Line
        data={{
          labels: chartdata.map((chartdata) => chartdata.month),
          datasets: [
            {
              data: chartdata.map((chartdata) => chartdata.price),
              label: `${topic}`,
              borderColor: currentTheme.btnColor,
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 3,
              borderColor: "red",
            },
          },
          Plugin: {
            autocolors: {
              customize() {
                return {
                  background: "gold",
                  border: "red",
                };
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Chartt;
