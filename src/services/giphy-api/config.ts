import {ENV} from '@giphy-search/config';

export interface IApiConfig {
  url: string;
}

export const DEFAULT_API_CONFIG: IApiConfig = {
  url: ENV.giphyUrl,
};
