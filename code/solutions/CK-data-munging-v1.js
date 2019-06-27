const fs = require('fs');
const readline = require('readline');

module.exports = async () => {
  const rl = readline.createInterface({
    input: fs.createReadStream('./data/football.dat'),
    crlfDelay: Infinity,
  });

  const minimumInfo = { name: '', difference: Infinity };

  let minimum = await rl
    .on('line', (line) => {
      const teamInfo = line.trim().split(/[-.\s]+/);
      const difference = Number(teamInfo[6]) - Number(teamInfo[7]);

      if (teamInfo[0] !== 'Team' && teamInfo[0] !== '' && Math.abs(difference) < minimumInfo.difference) {
        minimumInfo.name = teamInfo[1];
        minimumInfo.difference = Math.abs(difference);
      }
    }).on('close', () => {
      console.log('min: ', minimumInfo);
      return minimumInfo
    });

  console.log('return: ', minimum);
};
