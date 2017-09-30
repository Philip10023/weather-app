console.log('starting app');

setTimeout(() => {
  console.log('Inside of callback funct')
}, 2000);

setTimeout(() => {
  console.log('no delay')
}, 0);

console.log('finishing up')
