import React from "react";
import * as dateFns from "date-fns";

function getElapsedTime(pastDate) {
  
    const duration = dateFns.intervalToDuration({
        start: pastDate,
        end: new Date(),
    });

    let [years, months, days, hours, minutes, seconds] = ["", "", "", "", "", ""];
    years = duration.years === 0 ? "0 years" : (duration.years === 1 ? "1 year" : `${duration.years} years`);
    months = duration.months === 1 ? "1 month" : `${duration.months+1} months`;
    days = duration.days === 1 ? "1 day" : `${duration.days} days`;
    hours = duration.hours === 1 ? "1 hour" : `${duration.hours} hours`;
    minutes = duration.minutes === 1 ? "1 hour" : `${duration.minutes} minutes`;
    seconds = duration.seconds === 1 ? "1 hour" : `${duration.seconds} seconds`;

    let response = [years+", ", months+", ", days+", ", hours+", ", minutes+", and ", seconds].filter(Boolean);
    return response.join(" ");
}

function SugarPickle() {
    let [timestring, setTimestring] = React.useState();
    setInterval(updateTimestring, 1000);
    let date = new Date(2021,12,4);
    function updateTimestring () {
        setTimestring(getElapsedTime(date));
    }

	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                margin: 20,
                padding: 20
                }}
            >
                {timestring && timestring}


            </div>
		</div>
	);
}

export default SugarPickle;