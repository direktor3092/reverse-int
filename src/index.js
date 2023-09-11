module.exports = function reverse (n) {
    let str = '';
    n >= 0 ? str = n.toString() : str = (-n).toString()
    return  str.split('').reverse().join('');
}

