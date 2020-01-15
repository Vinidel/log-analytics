const analytics = require('./analytics');

describe('Analytics', () => {
  let mockedUrl;
  let mockedIpAddress;
  let analyse;

  beforeEach(() => {
    analyse = analytics();
    mockedUrl = '/intranet-analytics/';
    mockedIpAddress = '177.71.128.21';
  });

  it('should add url to urls array', () => {
    analyse.addToUrls(mockedUrl)
    expect(analyse.urls).toContain(mockedUrl);
    expect(analyse.urls.length).toEqual(1);
  });

  it('should add ip address to ip addresses array', () => {
    analyse.addToIpAddresses(mockedIpAddress)
    expect(analyse.ipAddresses).toContain(mockedIpAddress);
    expect(analyse.ipAddresses.length).toEqual(1);
  });

  describe('Url analytics', () => {
    const mockedUrls = [
      '/intranet-analytics/',
     '/intranet-analytics/',
     '/another-analytics/',
     '/just-analytics/',
     '/intranet-analytics/',
     '/google-analytics/',
     '/google-analytics/',
     '/another-analytics/',
     '/google-analytics/',
     '/aws-analytics/',
     '/aws-analytics/',
     '/google-analytics/',
     '/aws-analytics/',
     '/google-analytics/',
    ]
    let analyse = analytics();

    beforeAll(() => {
      mockedUrls.forEach((url) => {
        analyse.addToUrls(url);
      })
    });

    it('should get top 3 urls', () => {
      const top3 = analyse.getTop3Urls();
      expect(top3.length).toEqual(3);
      expect(top3[0].frequency).toEqual(5);
    });
  });

  describe('IP address analytics', () => {
    const mockedIPs = [
      '177.71.128.21', 
      '177.75.128.21',
      '177.72.128.21',
      '177.71.128.21',
      '177.73.128.21',
      '177.71.128.21',
      '177.73.128.21',
      '177.73.128.21',
      '177.75.128.21',
      '178.73.128.21',
  ]
    let analyse = analytics();

    beforeAll(() => {
      mockedIPs.forEach((el) => {
        analyse.addToIpAddresses(el);
      })
      analyse.ipAddresses
    });

    it('should get top 3 urls', () => {
      const top3 = analyse.getTop3IPs();
      expect(top3.length).toEqual(3);
      expect(top3[0].frequency).toEqual(3);
    });

    it('should get number of unique ips', () => {
      const result = analyse.getNumberOfUniqueIPs();
      expect(result).toEqual(2);
    });
  });
});