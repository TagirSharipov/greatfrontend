function dropRightWhile(array, predicate) {
    const res = []
  
     for (let i = 0; i < array.length; i =i+1) {
  
      if (predicate(array[i], i, array) === true) continue;
      res.push(array[i]) 
     }
  
    return res
  }
  
  
  console.log(
    dropRightWhile([1, , 3, 4, 5], (value) => value === undefined))