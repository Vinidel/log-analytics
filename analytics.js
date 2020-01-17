const {countFrequency} = require('./helpers');
const TOP_3 = 2;

function analytics() {
  const urls= [];
  const ipAddresses= [];

  const getTop3 = (arrayToSearch) => () => {
    const sorted = arrayToSearch.sort();
    const result = countFrequency(sorted, 1);
    const top3 = [];
    result.sort((a, b) => {
     let r = 0;
     if (a.frequency < b.frequency) {
      r = 1;
     } else {
       r = -1;
     }
     return r;
    }).map((el,i) => {
      if (i <= TOP_3) {
        top3.push(el)
      }
    })
    return top3;
  }

  const getUnique = (arrayToSearch) => () => {
    const sorted = arrayToSearch.sort();
    const result = countFrequency(sorted, 1);
    const uniques = result.filter((ip) => {
      return ip.frequency === 1;
    })

    return uniques.length;
  }

  return {
    addToUrls: (url) => {
      urls.push(url);
    },
    addToIpAddresses: (ipAddress) => {
      ipAddresses.push(ipAddress);
    },
    getTop3Urls: getTop3(urls),
    getTop3IPs: getTop3(ipAddresses),
    getNumberOfUniqueIPs: getUnique(ipAddresses),
    urls,
    ipAddresses
  }
}

module.exports = analytics;