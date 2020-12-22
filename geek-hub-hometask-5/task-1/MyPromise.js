Number.prototype.then = function(executor) {
  return executor(this.valueOf());
}

function perform(number, executor) {
  return executor(number);
}

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

// ------------------------------------------------------------------------------------------------------------------------

class MyPromise {
  constructor(executor) {
    this.value;
    this.reason;
    this.executor = executor;
    const resolve = value => this.resolveFn(value);
    const reject = reason => this.rejectFn(reason);
    executor(resolve, reject);
  }
  then(ifResolve, ifReject) {
    return new this.constructor((resolve, reject) => {
      this.resolveFn = ifResolve;
      this.rejectFn = ifReject;
    });
  }
}

function myPromise (executor) {
  let thenOnResolve;
  let thenOnReject;
  this.then = (onResolveFn, onRejectFn) => {
    return new myPromise((resolve, reject) => {
      thenOnResolve = value => {
        const resolveResult = onResolveFn(value);
        resolve(resolveResult);
      };
      if (onRejectFn) {
        thenOnReject = reason => {
          const rejectResult = onRejectFn(reason);
          reject(rejectResult);
        }
      }
    });
  };
  const resolve = value => thenOnResolve && thenOnResolve(value);
  const reject = reason => thenOnReject && thenOnReject(reason);
  executor(resolve, reject);
}

new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
    reject(1)
  }, 1000);
}).then(data => data * 2, data => data * 3)
.then(data => console.log(data))