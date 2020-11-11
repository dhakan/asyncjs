function runSetTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function runImprovedCallbackHell() {
  runSetTimeout(1000)
    .then(() => {
      return runSetTimeout(2000);
    })
    .then(() => {
      return runSetTimeout(3000);
    })
    .then(() => {
      console.log("I assume you can see me now?");
    });
}

runImprovedCallbackHell();
