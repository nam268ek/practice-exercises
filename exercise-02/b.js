
const api = new Promise((resolve, reject) => {
  resolve(1);
})
  .then((data) => console.log("result: ", data))
  .catch((err) => {});

const api2 = new Promise((resolve, reject) => {
  resolve(2);
})
  .then((data) => console.log("result2: ", data))
  .catch((err) => {});

const api3 = new Promise((resolve, reject) => {
  resolve(3);
})
  .then((data) => console.log("result3: ", data))
  .catch((err) => {});
