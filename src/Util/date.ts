import moment, { Moment } from 'moment';

export const digitNumber = (n: number | string) => {
  if (n < 0) {
    return 0;
  }
  return n < 10 ? '0' + n : n;
};

export const countdownTime = (
  start: Moment,
  end: Moment
): { hours: string | number; minutes: string | number; seconds: string | number } => {
  let timeDiff = moment.duration(end.diff(start), 'milliseconds');

  const hours = timeDiff.days() * 24 + timeDiff.hours();
  return {
    hours: digitNumber(hours),
    minutes: digitNumber(timeDiff.minutes()),
    seconds: digitNumber(timeDiff.seconds()),
  };
};
