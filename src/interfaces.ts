export interface IData {
  _id?: any;
  type?: string;
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

export interface IConfig {
  apiKey?: string;
  homeLatLng?: ICoordinates;
  mapStyle?: google.maps.MapTypeStyle[];
}
