module.exports = function repeater(str, options) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  separator = separator || '+';
  additionSeparator = additionSeparator || '|';
  if (addition === null) {
    addition = 'null';
  } else {
      addition = addition;
    }
  var additionString = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return new Array(repeatTimes).fill(str + additionString).join(separator);
};