'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
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

const jadenCase = (str) =>{
	let result1 = str.split(' ')
	let result2 = result1.map(capitalize)
	let result3 = result2.join(" ")

return(result3)
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('How are you?'), 'How Are You?')
// End of tests */
