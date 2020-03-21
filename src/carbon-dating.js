const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }
  var sampleActivityNumber = parseFloat(sampleActivity);
  if (!isFinite(sampleActivityNumber) || (sampleActivityNumber >= MODERN_ACTIVITY) || (sampleActivityNumber <= 0) ) {
    return false; 
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k);
};
