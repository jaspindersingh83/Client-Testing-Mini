const addNums = (x, y) => {
  return x + y;
};

const callBackInvoker = cb => {
  return cb();
};

const iterator = (num, cb) => {
  for (let i = 1; i <= num; i++) {
    cb();
  }
};

const each = (arr,cb) => {
  for(let i = 0; i < arr.length; i++){
    cb(arr[i]);
  };
};

module.exports = {
  addNums,
  callBackInvoker,
  iterator,
  each,
};
