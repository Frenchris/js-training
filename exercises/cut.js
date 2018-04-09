'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */

const cutFirst = (str) => {

	let result = str.split('')
	let result2 = result.pop()
	let result3 = result.pop()
	let result4 = result.join('')


return(result4)

}

const cutLast = (str) => {

	let result = str.split('')
	let result2 = result.shift()
	let result3 = result.shift()
	let result4 = result.join('')

return(result4)

}

const cutFirstLast =(str) => {

	let result = cutFirst(str)
	let result2 = cutLast(result)


return(result2)

}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('abcde'), 'abc')
assert.strictEqual(cutLast('abcde'), 'cde')
assert.strictEqual(cutFirstLast('abcde'), 'c')
// End of tests */
