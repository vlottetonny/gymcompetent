import React from "react";

type DayScheduleProps = {
    dayName: string;
    day: string[];
};

const DaySchedule: React.FC<DayScheduleProps> = ({ dayName, day }) => {
    return (
        <div className={"h-full w-1/7 hover:w-1/3"}>
            <p className={""}>{dayName.substring(0, 3)}</p>
            {day.map((item, index) => (
                <div key={index} className={"p-1 truncate"}>{item}</div>
            ))}
        </div>
    );
};

export default DaySchedule;