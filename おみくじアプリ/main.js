const button = document.getElementById('button');

button.addEventListener('click', () => {
  // const results = ['大吉', '吉', '小吉', '凶'];
  // const num = Math.floor(Math.random() * results.length);
  // button.textContent = results[num];
   
  // if (num === 0) {
  //   button.textContent = '大吉';
  // } else if(num === 1) {
  //   button.textContent = '吉';
  // } else {
  //   button.textContent = '凶';
  // }

  const n = Math.random();
  if (n < 0.05) {
    button.textContent = '大吉';
  } else if (n < 0.2) {
    button.textContent = '中吉';
  } else {
    button.textContent = '凶';
  }
});