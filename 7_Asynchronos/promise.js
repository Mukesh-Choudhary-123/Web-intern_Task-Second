let myPromise = new Promise(function (resolve, reject) {
  const a = 4;
  const b = 41;

  setTimeout(() => {
    if (a === b) {
      resolve("The Value are Equal");
    } else {
      reject("The Value are Not Equal");
    }
  }, 2000);
});

// console.log(myPromise);

myPromise.then(function (result) {
  console.log(result);
});

myPromise.catch(function (err) {
  console.log(err);
});
