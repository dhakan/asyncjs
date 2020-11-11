async function runImprovedFetchUsage() {
  const response = await fetch("http://numbersapi.com/42/math");
  const result = await response.text();
  console.log(result);
}

runImprovedFetchUsage();
