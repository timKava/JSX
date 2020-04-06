// Rest parameter
function max(...numbers) {
    console.log(numbers);
}
//rest has to go last !!!
//You can't have 2 rest parameters
max(1, 3);
max(4, 6, 9);
max(4, 6, 9, 9);
max();

function min(a, b, ...numbers) {
    console.log(numbers);
}

min(4, 5, 9, 3, 6, 4);
