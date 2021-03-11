exports.min = function min (array) {
    return (array === undefined || array.length === 0) ? 0 : Math.min(...array);
}

exports.max = function max (array) {
    return (array === undefined || array.length === 0) ? 0 : Math.max(...array);
}

exports.avg = function avg (array) {
    return (array === undefined || array.length === 0) ? 0 : (array.reduce((sum, current) => sum + current, 0) / array.length);
}
