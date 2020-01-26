let prom = new Promise(function(resolve, reject) {
  let task = 1 + 1;
  task == 2 ? resolve("Success") : reject("Failed");
});

prom
  .then(msg => console.log("It is in the " + msg))
  .catch(msg => console.log("It is in the " + msg));
