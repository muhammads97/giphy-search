import {ENV} from '@giphy-search/config';
import axios, {Axios} from 'axios';
import {DEFAULT_API_CONFIG, IApiConfig} from './config';
import {
  AgeGroups,
  IGIF,
  IServerGIF,
  IServerRandomGIFResponse,
  IServerSearchResponse,
} from './types';

class GiphyApi {
  private static config: IApiConfig;
  private axiosInstance: Axios;
  private controller: AbortController | undefined = undefined;

  public constructor(config: IApiConfig = DEFAULT_API_CONFIG) {
    GiphyApi.config = config;
    this.axiosInstance = axios.create({
      baseURL: GiphyApi.config.url,
      params: {
        api_key: ENV.giphyToken,
      },
    });
  }

  public getRandom = async (): Promise<IGIF> => {
    if (this.controller !== undefined) {
      this.controller.abort();
    }
    this.controller = new AbortController();
    const response = await this.axiosInstance.get<IServerRandomGIFResponse>(
      'gifs/random',
      {signal: this.controller.signal},
    );
    return this.mapper(response.data.data);
  };

  public search = async (keyword: string): Promise<IGIF[]> => {
    if (this.controller !== undefined) {
      this.controller.abort();
    }
    this.controller = new AbortController();
    const response = await this.axiosInstance.get<IServerSearchResponse>(
      'gifs/search',
      {
        params: {q: keyword},
        signal: this.controller.signal,
      },
    );
    return response.data.data.map((gif: IServerGIF) => this.mapper(gif));
  };

  private mapper = (data: IServerGIF): IGIF => ({
    id: data.id,
    title: data.title,
    displayUrl: data.bitly_url,
    url: data.images.original.url,
    rating: AgeGroups[data.rating],
    width: parseInt(data.images.original.width, 10),
    height: parseInt(data.images.original.height, 10),
    small: {
      height: parseInt(data.images.fixed_width_small_still.height, 10),
      width: parseInt(data.images.fixed_width_small_still.width, 10),
      url: data.images.fixed_width_small_still.url,
    },
  });
}

export default new GiphyApi();
