async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}
const t = Date.now();
sleep(100).then(() => console.log(Date.now() - t));
