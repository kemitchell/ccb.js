```javascript
var ecb = require('ecb')

doSomething(ecb(done, function (result) {
  console.log(result)
})
```

is short for

```javascript
doSomething(function (error, result) {
  if (error) {
    done(error)
  } else {
    console.log(result)
  }
})
```
