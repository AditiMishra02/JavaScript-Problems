// File: promise_example.js
function asyncFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Async operation completed');
      }, 2000);
    });
  }
  
  asyncFunction().then(result => {
    console.log(result);
  }).catch(error => {
    console.error(error);
  });
  