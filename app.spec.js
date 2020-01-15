const {startApp} = require('./app');
const analytics = require('./analytics');
const {logger} = require('./helpers');

jest.mock('./analytics');
jest.mock('./helpers');

describe('App', () => {
  let addToIpAddressesStub;
  let addToUrlsStub;
  let getTopUrlStub;
  let getUniqueStub;
  let getTopIpsStub;
  let stub;

  beforeAll(async () => {
    addToIpAddressesStub = jest.fn();
    addToUrlsStub = jest.fn();
    getTopIpsStub = jest.fn().mockReturnValue([]);
    getTopUrlStub = jest.fn().mockReturnValue([]);
    getUniqueStub = jest.fn();

    stub = () => {
      return {
        addToUrls: addToUrlsStub,
        addToIpAddresses: addToIpAddressesStub,
        getTop3Urls: getTopUrlStub,
        getTop3IPs: getTopIpsStub,
        getNumberOfUniqueIPs: getUniqueStub,
        }
      }
      analytics.mockImplementation(stub);
      await startApp();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it('should call analyse addToIpAddresses', async () => {
    expect(addToIpAddressesStub).toHaveBeenCalled();
  });

  it('should call analyse addToUrls', async () => {
    expect(addToUrlsStub).toHaveBeenCalled();
  });

  it('should call analyse getTop3Url', async () => {
    expect(getTopUrlStub).toHaveBeenCalled();
  });

  it('should call analyse getTop3Ips', async () => {
    expect(getTopIpsStub).toHaveBeenCalled();
  });

  it('should call analyse getNumberOfUniqueIPs', async () => {
    expect(getUniqueStub).toHaveBeenCalled();
  });

  it('should call logger', () => {
    expect(logger).toHaveBeenCalled();
  })
});