// function arraySwap(arr) {
//     const result = arr;
//     console.log(result) 
//     for (let i = 0; i < result.length - 1; i++) {
//     let aus = result[i]
//     result[i] = result[i + 1]
//     result[i + 1] = aus
//     return result; 
//     }
//     }
    
//     console.log(arraySwap([4,5,6]))

    function arraySwap(arr) {
        let x=[]
        for (let i = 0; i < arr.length; i += 2) {
          arr[i+1]?x.push([arr[i+1],arr[i]]):x.push(arr[i])
        }
        return x.flat()
      }

      console.log(arraySwap([4,5,6]))