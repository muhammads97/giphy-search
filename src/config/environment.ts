import Config from 'react-native-config';

export abstract class ENV {
  public static readonly giphyUrl: string = Config.GIPHY_API_URL;
  public static readonly giphyToken: string = Config.GIPHY_API_TOKEN;
}
