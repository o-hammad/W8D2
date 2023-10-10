// Your code here


Array.prototype.myEach = function (callback) {
    this.forEach(el => {
        callback(el);
    })
}

const arr4 = [1, 2, 3, 4];
const addOne = (el) => el + 1;

arr4.myEach(addOne)

Array.prototype.myMap = function (callback) {
    const output = [];

    this.myEach((el) => {
        output.push(callback(el));
    })

    return output;
}

console.log(arr4.myMap(addOne));

Array.prototype.myReduce = function (func, initialValue) {
    let acc;
    let i;

    if (initialValue) {
        acc = initialValue;
        i = 0;
    } else {
        acc = this[0];
        i = 1;
    }

    for (i; i < this.length; i++) {
        acc = func(acc, this[i]);
    }

    return acc;
}

let arr5 = [1, 2, 3]

console.log(arr5.myReduce(function (acc, el) {
    return acc + el;
}, 25)); // => 31

console.log(arr5.myReduce(function (acc, el) {
    return acc + el;
})); // => 6


