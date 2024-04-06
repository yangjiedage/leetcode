function longTimeTask() {
  let result = '';
  for(let i = 0; i < 10000000; i++) {
    result += 'a'
  }
  const title = document.querySelector('.title');
  title.style.color = '#ead093';
}

longTimeTask();
