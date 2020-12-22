## 1)

Implement perform function.
```
perform(20, function(value) {
  console.log(value) // 20
  var param = 1;
  console.log(param); // 1
  return param;
  })
  .then(function(param) {
  console.log(++param); // 2
  return param;
  })
  .then(function(param) { // param === 2
  console.log(++param); // 3
  return param;
});
```

## 2) 

Create debounce function
