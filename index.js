
const sum = (fromN, toN) => fromN !== toN ? fromN + sum(fromN + 1, toN) : toN
module.exports = sum;