function runCallbackHell() {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        console.log("Can you see me all the way in here?");
      }, 3000);
    }, 2000);
  }, 1000);
}

runCallbackHell();
