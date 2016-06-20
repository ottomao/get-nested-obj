get-nested-obj
==============

## Intro

* safely get a nested object

## Sample
```javascript
var getNestedObj = require("get-nested-obj");
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
console.log(getNestedObj(test, 'list', '0', 'itemA')); // 'aa'
console.log(getNestedObj(null, 'level1', 'level2', 'foo')); // null
```

## Author
Otto Mao
ottomao@gmail.com