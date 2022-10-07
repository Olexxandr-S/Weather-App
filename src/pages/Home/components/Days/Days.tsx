import React from 'react';
import { Card } from './Card';

import s from './Days.module.scss';
import { Tabs } from './Tabs';

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
      day: 'Сьогодні',
      day_info: '28',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Хмарно',
    },
    {
      day: 'Завтра',
      day_info: '29',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'невеликий дощ і сонце',
    },
    {
      day: 'Ср',
      day_info: '30',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'невеликий дощ',
    },
    {
      day: 'Чт',
      day_info: '28',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Хмарно',
    },
    {
      day: 'Пт',
      day_info: '28',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Хмарно',
    },
    {
      day: 'Сб',
      day_info: '28',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Хмарно',
    },
    {
      day: 'Вс',
      day_info: '28',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Хмарно',
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
