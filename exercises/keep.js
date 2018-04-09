'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = (str) => {

	let result = str.split('')
	let result2 = result[0] + result[1]



return(result2)

}

const keepLast = (str) => {

	let Ln = str.length
	let result = str.split('')
	let result2 = result[Ln-2] + result[Ln-1]

return(result2)

}

const keepFirstLast =(str) => {

	let result = str.split('')
	let result2 = result[2] + result[3]


return(result2)

}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('abcde'), 'ab')
assert.strictEqual(keepLast('abcde'), 'de')
assert.strictEqual(keepFirstLast('abcde'), 'cd')
// End of tests */

