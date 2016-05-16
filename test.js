var getNestedObj = require("./index");
var test =
  {
    level1:
      {
        level2:
          {
            level3:'i am here'
          }
      }
  };

console.log(getNestedObj(test, 'level1', 'level2', 'level3')); // 'i am here'
console.log(getNestedObj(test, 'level1', 'level2', 'foo')); // null
