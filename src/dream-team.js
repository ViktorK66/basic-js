module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members.map((name)=> {
    if(typeof name === 'string') return name.trim()[0].toUpperCase();
  }
  ).sort().join('');
};