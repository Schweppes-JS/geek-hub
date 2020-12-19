Number.prototype.add = function(parameter) {
  if (typeof parameter === 'number' && !isNaN(parameter)) {
    return this.valueOf() + parameter;
  }
  console.log('please, pass the correct parameter in "add"');
}

Number.prototype.multiply = function(parameter) {
  if (typeof parameter === 'number' && !isNaN(parameter)) {
    return this.valueOf() * parameter;
  }
  console.log('please, pass the correct parameter in "multiply"');
}

Number.prototype.result = function() {
    return this.valueOf();
}

const calculate = function (parameter) {
  if (typeof parameter === 'number' && !isNaN(parameter)) {
    return parameter;
  }
  console.log('please, pass the correct parameter in "calculate"');
}

console.log(calculate(3).add(2).multiply(2).result());
