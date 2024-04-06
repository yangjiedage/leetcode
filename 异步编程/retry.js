let isTimeout = false;
function asyncFn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isTimeout) return;
      if (Math.random() < 0.2) {
        console.log('inner success');
        resolve('success');
      } else {
        console.log('inner failed');
        reject('failed');
      }
    }, 5 * 1000 * Math.random());
  });
}

function runWithRetry(fn, retryTimes, timeout) {
  // 你的实现
  return new Promise((resolve, reject) => {
    let tryTimes = 0;
    setTimeout(() => {
      isTimeout = true;
      reject('timeout')
    }, timeout);
    async function runFn() {
      tryTimes += 1;
      try {
        const res = await fn();
        resolve(res);
      } catch (error) {
        if (tryTimes === retryTimes) {
          reject(error);
          return;
        }
        runFn();
      }
    }
    runFn();
  })
}

const start = Date.now();
console.log('start', start);
runWithRetry(asyncFn, 3, 5 * 1000) // 重复调用asyncFn函数直至成功（返回resolved的Promise）或达到重试次数上限，或者超时
  .then(console.log, console.log).finally(() => {
    console.log('end', Date.now() - start);
  })