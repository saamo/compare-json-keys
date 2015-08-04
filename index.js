module.exports = function(obj1, obj2) {
  var keysObj1 = Object.keys(obj1).sort();
  var keysObj2 = Object.keys(obj2).sort();
  return JSON.stringify(keysObj1) === JSON.stringify(keysObj2);
};
