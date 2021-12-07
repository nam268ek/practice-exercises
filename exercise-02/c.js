async function api(callback) {
  await callback(1);
}
async function api2(callback) {
  await callback(2);
}
async function api3(callback) {
  await callback(3);
}
api(function (result) {
  console.log("result: ", result);
  api2(function (result2) {
    console.log("result2: ", result2);
    api3(function (result3) {
      console.log("result3: ", result3);
    });
  });
});
