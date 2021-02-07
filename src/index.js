module.exports = function reverse (n) {
    let reverse = n.toString().split("").reverse().join("")
    reverse = parseInt(reverse, 10)
    return reverse
}
