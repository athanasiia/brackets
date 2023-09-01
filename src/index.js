module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  bracketsConfig = [].concat(...bracketsConfig);
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    if (bracketsConfig.lastIndexOf(str[i]) % 2 !== 0 && bracketsConfig[bracketsConfig.lastIndexOf(str[i]) - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}
