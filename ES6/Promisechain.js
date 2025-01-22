var add = function(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            reject(Error("Invalid input: both arguments must be numbers."));
        } else {
            var sum = x + y;
            if (sum !== undefined) {
                resolve(sum);
            } else {
                reject(Error("Could not add the two values!"));
            }
        }
    });
};

var subtract = function(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            reject(Error("Invalid input: both arguments must be numbers."));
        } else {
            var result = x - y;
            if (result !== undefined) {
                resolve(result);
            } else {
                reject(Error("Could not subtract the two values!"));
            }
        }
    });
};

// Starting promise chain
add(2, "hello")
    .then((added) => {
        return subtract(added, 3);
    })
    .then((subtracted) => {
        return add(subtracted, 5);
    })
    .then((added) => {
        return added * 2;    
    })
    .then((result) => {
        console.log("My result is ", result);
    })
    .catch((err) => {
        console.error("Error:", err.message);
    });
