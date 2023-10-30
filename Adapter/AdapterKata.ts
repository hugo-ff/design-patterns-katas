export class ExternalApi {
  fetchData(): Promise<any> {
    return Promise.resolve({ id: 1, data: 'Sample data' });
  }

  processData(data: any): void {
    console.log(`Processing data: ${JSON.stringify(data)}`);
  }
}

// Target interface expected by the client
export interface InternalSystem {
  getData(): any;
  handleData(data: any): void;
}

export class ExternalApiAdapter implements InternalSystem {
  private externalApi: ExternalApi;

  constructor(externalApi: ExternalApi) {
    this.externalApi = externalApi;
  }

  getData(): any {
    return this.externalApi.fetchData();
  }

  handleData(data: any) {
    this.externalApi.processData(data);
  }
}

const externalApi: ExternalApi = new ExternalApi();
const apiAdapter: InternalSystem = new ExternalApiAdapter(externalApi);

const processData = async (internalApi: InternalSystem) => {
  const data = await internalApi.getData();
  internalApi.handleData(data);
}

processData(apiAdapter);
