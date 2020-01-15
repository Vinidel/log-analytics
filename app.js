const readline = require('readline');
const fs = require('fs');
const analytics = require('./analytics');
const FILE_PATH = './programming-task-example-data.log';
const {logger} = require('./helpers');

async function startApp() {
  const readInterface = readline.createInterface({
    input: fs.createReadStream(FILE_PATH),
    console: false
  });
  
  const analyse = analytics();

  return new Promise((resolve, reject) => {
    readInterface.on('line', (line) => {
      const splitedLog = line.split(' ');
      const ipAddress = splitedLog[0];
      const url = splitedLog[6];
      analyse.addToIpAddresses(ipAddress);
      analyse.addToUrls(url);
    })
    
    readInterface.on('close', (line) => {
      const top3IpsMessage = `Top 3 Ips are ${analyse.getTop3IPs().map((el) => (el.r))}`;
      const top3UrlsMessage = `Top 3 Urls are ${analyse.getTop3Urls().map((el) => (el.r))}`;
      const uniqueIpsMessage = `Number of unique Ips is ${analyse.getNumberOfUniqueIPs()}`;
      logger(top3IpsMessage)
      logger(top3UrlsMessage)
      logger(uniqueIpsMessage)
      return resolve();
    })
  })
}

module.exports = {
  startApp
}