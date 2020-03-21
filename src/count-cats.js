const CAT='^^';
module.exports = function countCats(сatomatrix) {
  let number = 0;
  сatomatrix.forEach((i) => {
    i.forEach((j) => {
      if(j === CAT){
        number++;
      }
    });
  });
  return number;
};