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