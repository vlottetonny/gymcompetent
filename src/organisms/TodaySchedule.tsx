import React from "react";

interface TodayScheduleProps {
    dayName: string
    typeOfDay: string,
    schedule: string[]
}

const TodaySchedule: React.FC<TodayScheduleProps> = ({dayName, typeOfDay, schedule}) => {
    return (
        <div className={"m-5"}>
            <div className={"pb-5 border-b border-black flex flex-row justify-between"}>
                <p className={"text-3xl"}>{dayName}</p>
                <p className={"text-3xl"}>-</p>
                <p className={"text-3xl"}>{typeOfDay}</p>
            </div>
            <div className={"pt-5"}>
                {schedule.map((item, index) => (
                    <div key={index} className={"p-1 truncate"}>{item}</div>
                ))}
            </div>
        </div>
    );
}

export default TodaySchedule;