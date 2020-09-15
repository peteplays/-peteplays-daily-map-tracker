export interface IData {
  _id?: any;
  date: string;
  times: {
    [time: string]: ICoordinates;
  };
};

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IDisplayData {
  dateTime: string;
  coords: ICoordinates;
}
