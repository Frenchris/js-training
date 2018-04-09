'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 */
const capitalize = (str) => {
	//string mis en lowercase//
	let result = str.toLowerCase()
	
	//premiere lettre sauvegarder en Majuscule dans un autre emplacement//
	let firstLetterStored = result[0].toUpperCase()
	
	//enlevement de la premiere lettre de la string//
	
	let strDivided = result.split('')
	let firstLetterRemoved = strDivided.shift()
	let restOfString = strDivided.join('')

	//fusion de la lettre Majuscule et le reste de la string//

	let finalResult = firstLetterStored + restOfString

return(finalResult)
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
