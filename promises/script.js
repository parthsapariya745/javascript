let promises = new Promise(function(resolve, reject) {
    let condition = false

    if (condition) {
        resolve("Promise resolved");
    } else {
        reject("Promise rejected!");
    }
})
promises
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error(error);
    })