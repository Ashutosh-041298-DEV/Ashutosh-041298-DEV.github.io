import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip"
import React from "react";

function Calender() {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 8;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      }
  return (
    <div
      style={{ alignItems: "center", marginBottom: "10%", marginLeft: "22%" }}
    >
      <h2>GitHub Contributions</h2>
      <GitHubCalendar
        username="Ashutosh-041298-DEV"
        color="#4b0f83"
        blockSize={17}
        fontSize={20}
        transformData={selectLastHalfYear}
        
      />
      <ReactTooltip delayShow={20} />
    </div>
  );
}

export default Calender;
