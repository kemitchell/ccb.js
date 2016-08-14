module.exports = function ccb (onError, onSuccess) {
  return function () {
    if (arguments[0]) {
      onError.apply(null, arguments)
    } else {
      onSuccess.apply(null, Array.prototype.slice.call(arguments, 1))
    }
  }
}
