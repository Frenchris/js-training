'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */
const yell = (str) =>{
 	let result = str.toUpperCase()
 	return(result)
 }

//* Begin of tests
const assert = require('assert')

/*assert.fail('You must write your own tests')*/
assert.deepStrictEqual(yell('efg'),('EFG'))
// End of tests */
