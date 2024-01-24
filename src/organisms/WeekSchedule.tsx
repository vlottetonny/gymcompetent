import React from "react";
import DaySchedule from "../molecules/DaySchedule.tsx";

type WeekScheduleProps = {
    schedule: { dayName: string; schedule: string[] }[];
};

const WeekSchedule: React.FC<WeekScheduleProps> = ({ schedule }) => {
    return (
        <div className={"border-b border-black h-1/4 m-5 flex flex-row"}>
            {schedule.map((day) => (
                <DaySchedule dayName={day.dayName} day={day.schedule} />
            ))}
        </div>
    );
};

export default WeekSchedule;