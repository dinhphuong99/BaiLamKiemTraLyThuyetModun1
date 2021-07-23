function createArray(size) {
    let arr = [];
    for (let index = 0; index < size; index++) {
        arr[index] = Math.floor(Math.random() * 61 + 10);
    }

    return arr;
}

function printArray(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (index == arr.length - 1) {
            document.write(arr[index]);
        } else
            document.write(arr[index] + "-");
    }
}

function findMax(arr) {
    let max = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (max < arr[index]) {
            max = arr[index];
        }
    }
    return max;
}

function isPerfectSquare(number) {
    let num1 = Math.sqrt(number);
    let num2 = Math.floor(num1);
    if (num1 == num2) {
        return true
    } else
        return false;
}

function countPerfectSquare(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (isPerfectSquare(arr[index])) {
            sum+=arr[index];
        }
    }
    return sum;
}

function main() {
    var size = -1;
    while (size <= 0) {
        size = parseInt(prompt("Nhập vào kích cỡ của mảng: "));
    }

    var arr = createArray(size);
    printArray(arr);
    document.write("<br>");
    document.write("Số lớn nhất là" + findMax(arr));
    document.write("<br>");
    document.write("Tổng các số chính phương"+ countPerfectSquare(arr));
}