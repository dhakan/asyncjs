function runSetTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function runSuperImprovedCallbackHell() {
  await runSetTimeout(1000)
  await runSetTimeout(2000);
  await runSetTimeout(3000);
  console.log("Yeah, you can probably see me now?");
}

runSuperImprovedCallbackHell();
