// Your code here

Array.prototype.uniq = function () {
    let unique = [];
    this.forEach(el => {
        if (!unique.includes(el)) {
            unique.push(el);
        };
    });
    return unique;
};

let arr = [1,1,2,2,3,3]

console.log(arr.uniq())

Array.prototype.twoSum = function() {
    let indices = []
    
    for(let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length; j++) {
            if (i < j && (this[i] + this[j] === 0)) {
                indices.push([i,j]);
            }
        }
    }

    return console.log(indices);
}

let arr2 = [-1, 0, 2, -2, 1]

arr2.twoSum()

Array.prototype.transpose = function () {
    let i = 0;
    let output = [];
    let colArr = [];

    while (i < this[0].length) {
        this.forEach(arr => {
            colArr.push(arr[i]);
        })
        i++;
        output.push(colArr);
        colArr = [];
    }

    return console.log(output);
}

let arr3 = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]

arr3.transpose();
