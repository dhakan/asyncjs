const promise = fetch("http://numbersapi.com/42/math");

promise
  .then((result) => {
    return result.text();
  })
  .then((result) => {
    console.log(result);
  });
