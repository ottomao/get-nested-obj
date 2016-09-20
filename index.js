//ref: http://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key
function isArray(obj){
  return /array/i.test(Object.prototype.toString.call(obj));
}

function getNestedObj(obj){
    obj = obj || {};
    var path = Array.prototype.slice.call(arguments,1);

    for (var i = 0; i < path.length; i++) {
      if(path[i] === 0){
        path[i] = '0';
      }
      if (!obj || !path[i] || !(obj.hasOwnProperty(path[i]) || (isArray(obj) && obj[path[i]]))) {
        return null;
      }
      obj = obj[path[i]];
    }
    return obj;
}

module.exports = getNestedObj;