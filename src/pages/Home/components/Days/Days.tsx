import React from "react";
import { Card } from "./Card";

import s from "./Days.module.scss";
import { Tabs } from "./Tabs";

interface Props {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: "Monday",
      day_info: "28",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
  ];
  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => (
          <Card day={day} key={day.day} />
        ))}
      </div>
    </>
  );
};
