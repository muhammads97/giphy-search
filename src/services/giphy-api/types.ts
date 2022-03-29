export interface IGIF {
  title: string;
  url: string;
  displayUrl: string;
  rating: AgeGroups;
  width: number;
  height: number;
  id: string;
  small: {
    width: number;
    height: number;
    url: string;
  };
}

export interface IServerGIF {
  id: string;
  title: string;
  bitly_url: string;
  rating: 'y' | 'g' | 'pg' | 'pg-13' | 'r';
  images: {
    original: {
      width: string;
      height: string;
      url: string;
    };
    fixed_width_small_still: {
      width: string;
      height: string;
      url: string;
    };
  };
}
export interface IServerRandomGIFResponse {
  data: IServerGIF;
}

export interface IServerSearchResponse {
  data: IServerGIF[];
}

export enum AgeGroups {
  'y' = 'Y',
  'g' = 'G',
  'pg' = 'PG',
  'pg-13' = '13+',
  'r' = '17+',
}
