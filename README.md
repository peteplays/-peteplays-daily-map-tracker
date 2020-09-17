# peteplays-daily-map-tracker

## Usage
```
import DailyMapTracker from '@peteplays/daily-map-tracker';

<DailyMapTracker dbData={data} />;
```

### Data structure
`dbData` accepts `IData` data structure

```
interface IData {
  _id?: any;
  type?: string;
  date: string;
  times: {
    [time: string]: ICoordinates;
  };
};

interface ICoordinates {
  lat: number;
  lng: number;
}
```

## NPM Package
[https://www.npmjs.com/package/@peteplays/daily-map-tracker](https://www.npmjs.com/package/@peteplays/daily-map-tracker)

