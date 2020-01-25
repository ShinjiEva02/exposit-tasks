const source = [{ name: 'Pavel', age: 33 }, {name: 'Anton', age: 24}, {name: 'Igor', age: 33}];
const sourceError = [18, null, [], '', 'fdfdfsff'];

// 1
function getSlicedValuesOne(source, param = 'age') {
    return source
        .filter(element => element && element.hasOwnProperty(param) && element[param])
        .map(element => element[param])
}

console.log(getSlicedValuesOne(source, 'age'));
console.log(getSlicedValuesOne(source, 'lastName'));
console.log(getSlicedValuesOne(sourceError, 'age'));

// 2
function getSlicedValuesThree(source, param) {
    return source
        .filter(element => element && element.hasOwnProperty(param) && element[param])
        .map(element => element[param])
        .filter((element, index, array) => index === array.indexOf(element))
}

console.log(getSlicedValuesThree(source, 'age'));
console.log(getSlicedValuesThree(source, 'lastName'));
console.log(getSlicedValuesThree(sourceError, 'age'));

// 3
function getSlicedValuesFour(source, filter) {
    return source
        .map(element => filter(element, 'age'))
        .filter(element => element)
        .filter((element, index, array) => index === array.indexOf(element))
}

function checkParam(obj, param) {
    return obj && obj.hasOwnProperty(param) && obj[param]
}

console.log(getSlicedValuesFour(source, checkParam));
console.log(getSlicedValuesFour(source, checkParam));
console.log(getSlicedValuesFour(sourceError, checkParam));