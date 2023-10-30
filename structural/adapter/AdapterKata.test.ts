import { ExternalApi, InternalSystem, ExternalApiAdapter } from './AdapterKata';

describe('Adapter Tests', () => {
  it('should fetch and handle data', async () => {
    const externalApi: ExternalApi = new ExternalApi();
    const apiAdapter: InternalSystem = new ExternalApiAdapter(externalApi);

    const processData = async (internalApi: InternalSystem) => {
      const data = await internalApi.getData();
      internalApi.handleData(data);
      expect(data).toEqual({ id: 1, data: 'Sample data' });
    }

    processData(apiAdapter);
  });
});
