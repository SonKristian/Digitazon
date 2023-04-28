function merge(arr1, arr2) {
    let arr_f = []
    arr_f = arr1.concat(arr2)
    
        for (let i = arr_f.length-1; i>=0; i--){
          for(let j = 1; j<=i; j++){
            if(arr_f[j-1]>arr_f[j]){
              let aus = arr_f[j-1];
              arr_f[j-1] = arr_f[j];
              arr_f[j] = aus;
            }
          }
        }
        return arr_f;
}


console.log(merge([1,3,5], [2, 4, 6]))