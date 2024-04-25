const Search = require('./Search')
const Sort = require('./Sort')

const search = new Search()
const sort = new Sort()

const algo = () => {
  return {
    intro: "Welcome to Lo Algorithm"
  }
}

exports.algo = algo
exports.search = search
exports.sort = sort