function isSymmetricalNumber(number) {
    let numStr = number.toString();
    for (let i = 0, j = numStr.length-1; i < numStr.length/2; i++,j--) {
        if (numStr[i] != numStr[j]) {
            return false;
        }
    }
    return true;
}

function main() {
    for (let index = 100; index < 20000; index++) {
        if (isSymmetricalNumber(index)) {
            document.write(index + " ");
        }
    }
}