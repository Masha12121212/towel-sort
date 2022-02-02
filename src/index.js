
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    for(let key in matrix){
      if (key%2) matrix[key].reverse();
      for (let key1 in matrix[key]){
        arr.push(matrix[key][key1])
      }
    }
    return arr;
  
}
