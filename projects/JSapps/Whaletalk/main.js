/* excercise to practice loops, the input sentence gets "translated" into whale talk :-) */

/*write the sentence to be translated here*/
const input = 'ahoj ja jsem velryba';


const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
	for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
   		if (input[inputIndex] === vowels[vowelsIndex]){
      resultArray.push(vowels[vowelsIndex]);
    }
  }
  
  if (input[inputIndex] === 'e'){
    resultArray.push('e');
  }
  if (input[inputIndex] === 'u'){
    resultArray.push('u');
  }
}
console.log(resultArray.join('').toUpperCase());