/*
请求五秒之后开始每一秒轮询结果，直到 10 秒之后超时
*/
function sendRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success')
    }, 16000)
  })
}

function newSendRequest(time = 1000) {
  let start = Date.now();
  return new Promise((resolve, reject) => {
    let resNew = '';
    let isTimeout = false
    sendRequest().then((res) => {
      if (isTimeout) return;
      console.log('sendRequest', res, Date.now() - start);
      resNew = res;
      if (Date.now() - start < 5000) {
        resolve(res);
      }
    })
    setTimeout(() => {
      const intervalReq = setInterval(() => {
        console.log('start interval', Date.now() - start, 'res', resNew);
        if (Date.now() - start > 15000) {
          reject('failed');
          isTimeout = true
          clearInterval(intervalReq);
          return;
        }
        if (resNew) {
          resolve(resNew);
          clearInterval(intervalReq);
        }
      }, time)
    }, 5000);
  })
}

async function start() {
  try {
    const res = await newSendRequest();
    console.log('res', res);
  } catch (error) {
    console.log('error', error)
  }
  
}
start();