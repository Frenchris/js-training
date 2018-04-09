'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 */
 const whisper = (str) =>{
 	let result = str.toLowerCase()
 	return(result)
 }


//* Begin of tests
const assert = require('assert')

/*assert.fail('You must write your own tests')*/
assert.deepStrictEqual(whisper('ABCDefg'),('abcdefg'))
// End of tests */
