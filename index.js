// --------- basics ------------

let prom = new Promise(function(resolve, reject) {
  let task = 1 + 1;
  task == 2 ? resolve("Success") : reject("Failed");
});

// if condition is true then run resolve function otherwise run reject function
// promise resolve then we call by .then if promise reject then call by .catch

prom
  .then(msg => console.log("It is in the " + msg))
  .catch(msg => console.log("It is in the " + msg));

// // -------- medium -------------

// const userLeft = true;
// const userWatchingCatchMeme = false;

// function watchTutorialPromise() {
//   return new Promise(function(resolve, reject) {
//     userLeft
//       ? reject({
//           name: "User Left",
//           message: ":("
//         })
//       : userWatchingCatchMeme
//       ? reject({
//           name: "User Watching Cat meme",
//           message: "WebDevSimplified < Cat"
//         })
//       : resolve("Thunmbs Up and Subscribe");
//   });
// }

// watchTutorialPromise()
//   .then(msg => console.log("Success: ", msg))
//   .catch(err =>
//     console.log(
//       "User Name: " + err.name + "\n" + "User Message: " + err.message
//     )
//   );
