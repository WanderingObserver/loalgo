const Sort = require('./Sort')
const sort = new Sort()

class Search {
  constructor() {

  }

  linear(arr, target) {
    for(let i = 0; i < arr.length; i++) if(arr[i] === target) return i

    return -1
  }

  binary(arr, target, unordered = true) {
    if(unordered) arr = sort.bubble(arr)

    let start = 0, end = arr.length - 1

    while(start <= end) {
      const mid = Math.floor((start + end) / 2)

      if(arr[mid] === target) {
        return mid
      } else if(arr[mid] > target) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }

    return -1
  }
}

module.exports = Search