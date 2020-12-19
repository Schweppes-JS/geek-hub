function sum (parameter) {
  let accumulator = parameter;
  function next(nextParameter) {
    accumulator += nextParameter;
    console.log(accumulator);
    return next;
  }
  return next;
}
sum(1)(2)(3);