type HttpClientSettings = {
  baseUrl: string;
};

export class HttpClient {
  private baseUrl: string;

  constructor(settings: HttpClientSettings) {
    this.baseUrl = settings.baseUrl;
  }

  public get = async (endpoint: string): Promise<any> => {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    return response.json();
  };
}
