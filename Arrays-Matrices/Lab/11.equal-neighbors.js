function neighbors(matrix) {
    let counter = 0;

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
        for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++){
            if((colIndex + 1 < matrix[rowIndex].length) && matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]){
                counter++;
            }
            if((rowIndex + 1 < matrix.length) && matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]){
                counter++;
            }
        }
    }

    console.log(counter);
}

neighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);
neighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);