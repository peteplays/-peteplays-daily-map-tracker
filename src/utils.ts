import { IData } from './interfaces';

export const displayTime = (time: string) => {
  const [h, minutes] = time.split(':');
  const hour = Number(h);
  const convertHour = hour > 12
    ? hour - 12
    : hour;

  return `${convertHour}:${minutes}${hour >= 12 ? 'pm' : 'am'}`;
};

export const displayDate = (date: string) => {
  const removeLeadingZero = (val: string) => val[0] === '0' ? val.slice(1) : val;
  const [year, month, day] = date.split('-');

  return `${removeLeadingZero(month)}/${removeLeadingZero(day)}/${year.slice(2)}`;
}

export const getAllCoordinates = (data: IData) => {
  return Object.entries(data.times).map(([_, { lat, lng }]) => ({ lat, lng }));
}

export const pathsColors = (data: any[]) => {
  interface IPathAcc {
    pathIdx: number;
    paths: string[];
  };

  const colors = ['#005599', '#33aa82', '#aa3361', '#dd5f4e', '#a44edd'];
  const pathAcc: IPathAcc = {
    pathIdx: 0,
    paths: [],
  };

  const r = data.reduce((acc: IPathAcc) => {
    let pathIdx = acc.pathIdx;

    if (pathIdx >= colors.length) {
      pathIdx = 0;
    }

    acc.paths.push(colors[pathIdx]);
    acc.pathIdx = pathIdx + 1;

    return acc;
  }, pathAcc);

  return r.paths;
}
