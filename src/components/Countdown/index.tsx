/* eslint-disable react-hooks/rules-of-hooks */
import { countdownTime } from '@/Util/date';
import moment, { Moment } from 'moment';
import { Fragment, useEffect, useState } from 'react';
import { If, Then } from 'react-if';

interface Props {
  date_end: Moment;
}

type Time = {
  hours: string | number;
  minutes: string | number;
  seconds: string | number;
};

function Countdown({ date_end }: Props) {
  const [time, setTime] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = 1000;

    const countdownTimer = setInterval(function () {
      const endDate = date_end.endOf('day');
      const _time = countdownTime(moment(), endDate);
      setTime(_time);
    }, interval);
    return () => {
      clearInterval(countdownTimer);
    };
  }, [date_end]);

  return (
    <div className="flex items-center justify-center">
      {Object.keys(time).map((key: string, i: number) => (
        <Fragment key={'countdown-item' + i}>
          <If condition={i !== 0}>
            <Then>
              <span className="text-[#000] text-[24px] font-PlusJakartaSansSemiBold px-[11px]">
                :
              </span>
            </Then>
          </If>
          <span className="inline-block w-fit rounded-[8px] text-[#fbfbfb] lg:text-[18px] text-[14px] px-8px py-[4px] bg-[#000] font-PlusJakartaSansSemiBold">
            {time[key as keyof Time]}
          </span>
        </Fragment>
      ))}
    </div>
  );
}

export default Countdown;
