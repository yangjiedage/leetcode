class Scheduler {
  constructor() {
    this.count = 2
    this.queue = []
    this.current = 0;
  }
  async runTask(task) {
    this.current += 1;
    try {
      const res = await task();
      task.resolve(res);
    } catch (error) {
      task.resolve(error);
    }
    this.current -= 1;
    if (this.queue.length) {
      this.runTask(this.queue.shift());
    }
  } 
  add(task) {
    return new Promise((resolve, reject) => {
      task.resolve = resolve;
      if (this.current < this.count) {
        this.runTask(task);
      } else {
        this.queue.push(task);
      }
    })
  }
}


const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')