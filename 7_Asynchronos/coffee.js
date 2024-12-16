function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order for coffee recevied");
    } else {
      reject("Other orders Rejected");
    }
  });
}
function processOrder(order) {
  return new Promise(function (resolve) {
    console.log("Order is being processed");
    resolve(`${order} and is served`);
  });
}

// Promise 🔗

// placeOrder("coffee")
//   .then(function (orderPlaced) {
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;
//   })
//   .then(function (processedOrder) {
//     console.log(processedOrder);
//   });

// Async Await - keyword

async function serveOrder() {
  try {
    let orderPlaced = await placeOrder("coff");
    console.log(orderPlaced);
    let processedOrder = await processOrder(orderPlaced);
    console.log(processedOrder);
  } catch (error) {
    console.log(error);
  }
}

serveOrder();
