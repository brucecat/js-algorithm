/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const obj = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
 
  const stack = [];
  [...s].forEach((ele) => {
    if (stack.length === 0) {
      stack.push(ele);
    } else {
      let peek = stack[stack.length - 1];
      if (obj[peek] === ele) {
        stack.pop();
      } else {
        stack.push(ele);
      }
    }
  });
 
  return stack.length === 0;
};