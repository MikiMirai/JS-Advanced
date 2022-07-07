const matrix = [
    [4, 5, 6],
    [6, 5, 4],
    [1, 2, 3]];

//Foreaching and displaying matrix.
for (let row of matrix){
    for (let col of row){
        console.log(col);
    }
}

//Foreaching with indexes and displaying matrix.
for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
    for (let colIndex = 0; colIndex < matrix[rowIndex].lengt; colIndex++){
        console.log(matrix[rowIndex][colIndex]);
    }
}