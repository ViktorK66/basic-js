module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  var arrTransform = [];
  length = arr.length;
  for (let i=0;i<length;i++){
    switch (arr[i]) {
      case '--discard-prev':
        if (arrTransform.length) arrTransform.pop();
        break;
      case '--double-prev':
        if (i) arrTransform.push(arr[i - 1]);
        break;
      case '--double-next':
        if (i < length - 1) arrTransform.push(arr[i + 1]);
        break;
      case '--discard-next':
        i++;
        break;
      default: 
      arrTransform.push(arr[i]);
    };
  }
  return arrTransform;
};
