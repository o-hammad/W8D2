// Your code here

Array.prototype.bubbleSort = function () {
    let sorted = false;

    while (!sorted){
        sorted = true;

        for(let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return this;
}

let arr1 = [3, 9, 1, 7, 5];

console.log(arr1.bubbleSort());

String.prototype.substrings = function () {

    let string = [];
    for(let i = 0; i <= this.length; i++) {
        for(let j = i+1; j <= this.length; j++) {
            string.push(this.slice(i,j));
        }
    }

    return string;
}

console.log("abcde".substrings());


range = function (start, end) {

    if ( start === end ) {
        return start;
    }

    return [start] + [range(start+1, end)];
}

console.log(range(0,3));
