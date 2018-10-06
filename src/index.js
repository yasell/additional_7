module.exports = function solveSudoku(matrix) {
  // your solution
  result = matrix;

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (matrix[i][j] == 0) {
        result[i][j] = unique(result[i]);
      }
    }
  }

  buff = [];

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (matrix[j][i].length > 1) {
        buff.push(i);
      }
    }
  }

  var mass = [];
  var submass = [];

  for (var j = 0; j < buff.length; j++) {
    for (var i = 0; i < 9; i++) {
      if (!Array.isArray(matrix[i][buff[j]])) {
        submass.push(matrix[i][buff[j]]);
      }
    }
    if (submass.length != 0)
      mass.push(submass);
    var submass = [];
  }

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < buff.length; j++) {
      if (Array.isArray(matrix[i][buff[j]])) {
        if (Array.isArray(mass[j])) {
          result[i][buff[j]] = unique2(mass[j], matrix[i][buff[j]]);
          if (Array.isArray(result[i][buff[j]]))
            if (result[i][buff[j]].length == 1)
              result[i][buff[j]] = result[i][buff[j]];
        }
      }
    }
    if (submass.length != 0)
      mass.push(submass);
    var submass = [];
  }

  return result;
}

function unique(array) {
  var result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var obj = {};

  for (var i = 0; i < array.length; i++) {
    var index = result.indexOf(array[i]);
    if (index !== -1) result.splice(index, 1);
  }

  return result;
}

function unique2(array, array2) {
  var result = array2;
  var obj = {};

  for (var i = 0; i < array.length; i++) {
    var index = result.indexOf(array[i]);
    if (index !== -1) result.splice(index, 1);
  }

  return result;
}