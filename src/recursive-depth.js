module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      let countStages = 1;
      if (Array.isArray(arr[i])) {
        countStages += this.calculateDepth(arr[i]);
        if (count < countStages) {
          count = countStages;
        };
      };
    };
    return count;
  };
};