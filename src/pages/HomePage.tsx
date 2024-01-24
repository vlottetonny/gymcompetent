import NavBar from "../organisms/NavBar.tsx";
import React from 'react';
import WeekSchedule from "../organisms/WeekSchedule.tsx";
import TodaySchedule from "../organisms/TodaySchedule.tsx";

const HomePage: React.FC = () => {
    const weekSchedule = [
        { dayName: 'Monday', typeOfDay: "Legday", schedule: ["testingggg", "test"] },
        { dayName: 'Tuesday', typeOfDay: "Legday", schedule: ["testingggg", "test"] },
        { dayName: 'Wednesday', typeOfDay: "Legday", schedule: ["test", "test"] },
        { dayName: 'Thursday', typeOfDay: "Legday", schedule: ["test", "test"] },
        { dayName: 'Friday', typeOfDay: "Legday", schedule: ["test", "test"] },
        { dayName: 'Saturday', typeOfDay: "Legday", schedule: ["test", "test"] },
        { dayName: 'Sunday', typeOfDay: "Legday", schedule: ["test", "test"] },
    ];

    // get current day
    const tempDayIndex = new Date().getDay();
    const currentDayIndex = tempDayIndex === 0 ? 6 : tempDayIndex - 1;
    console.log(currentDayIndex);
    const currentDay = weekSchedule[currentDayIndex - 1];

    return (
        <div className={"h-dvh"}>
            <NavBar/>
            <WeekSchedule schedule={weekSchedule}/>
            <TodaySchedule dayName={currentDay.dayName} typeOfDay={currentDay.typeOfDay} schedule={currentDay.schedule}/>
        </div>
    );
};

export default HomePage;