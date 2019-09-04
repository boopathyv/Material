var string = 'YADOBERODEBANCZ';
var search = 'RZ'
var searchArray = Array.from(search,String);
let count = search.length;

//CORRECT -->> less time complexity
for (let index = 0; index <= string.length-count; index++) {
	if(index+count <= string.length){
		var subString = string.substr(index,count);
		if(check(subString)){
			console.log(subString);
			break;
		}
	}
	if(index+1 > string.length-count && ++count <= string.length){
		index = -1;
	}
}

// CORRECT
// for (let index = 0; index < string.length-2; index++) {
// 	if(index+count <= string.length){
// 		var subString = string.substr(index,count);
// 		if(check(subString)){
// 			console.log(subString);
// 			break;
// 		}
// 	}
// 	if(index+1 === string.length-2 && ++count < string.length){
// 		index = -1;
// 	}
// }

function check(subString){
	var array = Array.from(subString,String);
	return searchArray.every(val => array.includes(val));
}