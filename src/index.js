module.exports = function reverse (n) {
    let reverse = n.toString().split("").reverse().join("")
  if (n>=0) {
      reverse = parseInt(reverse,10)
      return reverse
  }
}
