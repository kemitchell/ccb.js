var ecb = require('./')
var assert = require('assert')
var fs = require('fs')

fs.stat('non-existent', ecb(onError, onSuccess))
fs.stat('package.json', ecb(onError, onSuccess))

var errored = false
var succeeded = false

function onError (error) {
  errored = true
}

function onSuccess (result) {
  succeeded = true
}

process.on('exit', function () {
  assert(errored)
  assert(succeeded)
})
