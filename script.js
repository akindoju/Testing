const googleDatabase = [
  'Shayo.com',
  'ManUtd.com',
  'Wowo.com',
  'ManUtdPlayers.com',
  'ManUtd1998.com',
  'Football.com',
  'ManUtd',
];

const googleSearch = (keyword, db) => {
  const matches = db.filter((website) => {
    return website.includes(keyword);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch('Man', googleDatabase));

module.exports = googleSearch;
