class Sort {
  constructor() {

  }

  bubble(arr) {
    let temp, swapped 
    let size = arr.length - 1

    for(let i = 0; i < size; i++) {
      swapped = false 

      for(let j = 0; j < size - i; j++) {
        if(arr[j] > arr[j+1]) {
          temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp 

          swapped = true
        }
      }

      if(!swapped) break
    }
    
    return arr
  }
}

module.exports = Sort