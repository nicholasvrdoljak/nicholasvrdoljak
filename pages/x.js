import React from "react";
import * as dateFns from "date-fns";

function getElapsedTime(pastDate) {
  
    const duration = dateFns.intervalToDuration({
        start: pastDate,
        end: new Date(),
    });

    return duration;
}

function X() {
    let [timeObj, setTimestring] = React.useState({});
    let [isMobile, setIsMobile] = React.useState(false);
    const interval = setInterval(updateTimestring, 1000);

    React.useEffect(() => {
        return () => {
            console.log('clearing interveral')
            clearInterval(interval);
        }
    }, []);
    let date = new Date(2022,07,31);
    let _window = typeof window == 'undefined' ? {} : window;
    
    function updateTimestring () {
        setIsMobile(_window.innerWidth <= 768);
        setTimestring(getElapsedTime(date));
    }
    
    function getTimestringElements() {
        let [years, months, days, hours, minutes, seconds] = ["", "", "", "", "", ""];
        years = timeObj.years === 0 ? "0 years" : (timeObj.years === 1 ? "1 year" : `${timeObj.years} years`);
        months = timeObj.months === 1 ? "1 month" : `${timeObj.months+1} months`;
        days = timeObj.days === 1 ? "1 day" : `${timeObj.days} days`;
        hours = timeObj.hours === 1 ? "1 hour" : `${timeObj.hours} hours`;
        minutes = timeObj.minutes === 1 ? "1 hour" : `${timeObj.minutes} minutes`;
        seconds = timeObj.seconds === 1 ? "1 hour" : `${timeObj.seconds} seconds`;
        if (!isMobile) {
            let string = [years, months, days, hours, minutes, seconds].join(', ')
            return (
                <div>{string}</div>
            );
        }

        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'space-evenly'}}>
                <div>{years}</div>
                <div>{months}</div>
                <div>{days}</div>
                <div>{hours}</div>
                <div>{minutes}</div>
                <div>{seconds}</div>
            </div>
        );
    }

	return (
		<div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: 20,
                    padding: 20,
                    height: '100%'
                }}
            >
                {timeObj.days > 0 && getTimestringElements()}


            </div>
		</div>
	);
}

export default X;
