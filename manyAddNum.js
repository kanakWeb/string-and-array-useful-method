function AddManyNumber(num1, num2) {
    let result = 0;
    for (const number of arguments) {
        result = result + number;
    }
    return result;
}

const ADDof = AddManyNumber(10, 20, 30, 40);
console.log(ADDof)