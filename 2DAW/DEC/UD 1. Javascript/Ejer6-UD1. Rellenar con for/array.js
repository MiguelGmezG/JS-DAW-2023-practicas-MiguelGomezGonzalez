const array = (nArrayMin, nArrayMax) => {
    var array = new Array;
    for (let index = 0; nArrayMin <= nArrayMax; index++) {
        array[index] = nArrayMin;
        nArrayMin++;
    }
    return array.join(`, `);
}

console.log(array(1, 30));
console.log(array(1, 50));
  
