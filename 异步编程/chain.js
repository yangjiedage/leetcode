class U{
  constructor() {
    this.queue = [];
    setTimeout(() => {
      this.next();
    }, 0)
  }
  console(params) {
    this.queue.push(() => {
      console.log(params)
      this.next();
    })
    return this;
  }
  setTimeout(time) {
    this.queue.push(() => {
      console.log('sleep', time);
      setTimeout(() => {
        this.next();
      }, time)
    })
    return this;
  }
  next() {
    const fn = this.queue.shift();
    fn && fn();
  }
}

const u = new U();
// console.log(u.console("breakfast"))
u.console("breakfast").setTimeout(3000).console("lunch").setTimeout(3000).console("dinner")

