class Test {
	constructor(){
		this.compositeGang = 0;
		this.primeGang = 0;
	}
	
	main() {
		var rows = 20;
		var columns = 19;
		// var arr = [[5,4,6,7,9,9,8,2,6,2,5],
		// 		   [7,3,5,2,6,6,6,2,6,9,5]]; // 2,11 // 6,6
		// var arr = [[3,6,8,5,6,7,8],[2,4,2,7,8,5,5],
		// 			   [3,7,6,4,9,7,2],[9,6,5,3,5,4,2],
		// 			   [4,6,3,4,5,2,8],[3,3,2,4,7,9,2],
		// 			   [6,2,9,4,6,4,7],[9,4,9,2,8,5,9]]; // 8,7 // 
		var arr = [[6,8,6,2,2,3,4,5,5,6,3,8,8,5,3,2,5,8,7], //20,19
				[8,4,2,2,9,9,9,5,2,7,4,3,9,5,4,3,2,4,9],
				[6,8,7,8,7,7,7,4,6,3,7,4,9,9,6,4,7,4,3],
				[5,4,9,4,7,5,5,7,6,8,9,5,7,3,4,8,6,4,8],
				[5,5,7,8,5,4,4,5,4,9,9,7,7,8,5,9,9,3,5],
				[5,9,8,9,6,3,9,6,4,2,3,8,9,7,4,7,7,9,8],
				[5,4,3,3,6,8,9,7,2,2,8,6,2,3,6,8,9,8,8],
				[8,7,7,4,9,5,2,4,7,7,2,6,3,4,7,2,5,7,6],
				[3,5,6,9,5,7,5,4,8,6,4,7,6,9,7,8,5,5,7],
				[9,6,6,3,2,8,7,2,6,7,8,4,7,5,9,4,3,8,6],
				[4,4,7,3,4,4,4,8,2,3,2,9,4,8,9,9,3,5,6],
				[5,9,4,6,7,5,6,2,6,7,8,5,3,6,7,2,9,9,2],
				[4,7,5,4,4,7,3,5,7,4,5,6,2,8,7,3,5,6,9],
				[6,7,9,2,6,7,3,8,4,6,5,7,3,9,7,6,6,3,2],
				[9,5,9,4,7,6,6,2,8,2,7,8,6,9,7,5,7,6,9],
				[8,3,3,6,5,9,7,9,3,6,7,9,4,9,3,9,9,9,8],
				[7,3,9,5,8,4,5,9,3,8,8,6,3,6,7,8,2,8,3],
				[9,7,7,8,4,2,3,6,3,9,7,8,6,5,4,9,2,9,6],
				[8,4,6,2,3,7,8,8,6,4,2,6,7,8,8,2,6,9,9],
				[8,7,5,2,5,5,7,9,4,2,4,2,5,9,2,2,5,5,5]];
		var array = [];

		for (var i = 0; i < rows; i++) {
			array[i] = [];
			for (var j = 0; j < columns; j++) {
				var number = arr[i][j];
				var isPrime = this.isPrimeNumber(number);
				array[i][j] = new Node(number,isPrime);
			}
		}
		
		
	
		this.checkForCompositeGangs(array,rows,columns);
		console.log("primeGang..."+this.primeGang);
		console.log("compositeGang..."+this.compositeGang);
	}

	checkForCompositeGangs(array, rows, columns) {
		var checkFor = null;
		var checkList = [];
		for (var i = 0; i < rows; i++) {
			for (var j = 0; j < columns; j++) {
				var node = array[i][j];
				if(node !== null) {
					var isPrime = node.isPrime;
					if(checkFor === null) {
						checkFor = isPrime;
					}
					if(checkFor === isPrime) {
						node.checked = true;
						checkList.push(i+","+j);
						this.checkForEight(array,checkFor,checkList,rows,columns);
					}
					if(checkFor === true) {
						this.primeGang++;
					}else {
						this.compositeGang++;
					}
					if(checkFor !== null) {
						this.doNull(array,rows,columns);
						this.checkForCompositeGangs(array,rows,columns);
					}
				}
			}
		}
	}

	doNull(array,rows,columns) {
		for (var i = 0; i < rows; i++) {
			for (var j = 0; j < columns; j++) {
				var node = array[i][j];
				if(node !== null && node.checked) {
					array[i][j] = null;
				}
			}
		}
	}

	checkForEight(array,checkFor,checkList,rows,columns) {
		for (var k = 0; k < checkList.length; k++) {
			var i = parseInt(checkList[k].split(",")[0]);
			var j = parseInt(checkList[k].split(",")[1]);
			var node;
			var number;
			if(i-1 >= 0 && j >= 0 && array[i-1][j] !== null) {
				node = array[i-1][j];
				if(checkFor == node.isPrime && !node.checked) {				
					node.checked = true;
					number = (i-1)+","+(j);
					if(checkList.indexOf(number) === -1) {
						checkList.push(number);
					}
				}
			}
			if(i >= 0 && j-1 >= 0 && array[i][j-1] !== null) {
				node = array[i][j-1];
				if(checkFor === node.isPrime && !node.checked) {				
					node.checked = true;
					number = (i)+","+(j-1);
					if(checkList.indexOf(number) === -1) {
						checkList.push(number);
					}
				}
			}
			if(i >= 0 && j+1 < columns && array[i][j+1] !== null) {
				node = array[i][j+1];
				if(checkFor == node.isPrime && !node.checked) {				
					node.checked = true;
					number = (i)+","+(j+1);
					if(checkList.indexOf(number) === -1) {
						checkList.push(number);
					}
				}
			}
			if(i+1 < rows && j >= 0 && array[i+1][j] !== null) {
				node = array[i+1][j];
				if(checkFor === node.isPrime && !node.checked) {
					node.checked = true;
					number = (i+1)+","+(j);
					if(checkList.indexOf(number) === -1) {
						checkList.push(number);
					}
				}
			}
			checkList = checkList.filter(obj => obj !== i+","+j);
			if(checkList.length !== 0) {
				this.checkForEight(array,checkFor,checkList,rows,columns);
			}
		}
	}

	isPrimeNumber(number) {
		if(number === 2) {
			return true;
		}
		if(number % 2 === 0) {
			return false;
		}
		for (var i = 2; i < number/2+1; i++) {
			if(number % i === 0) {
				return false;
			}
		}
		return true;
	}
}

class Node{
	constructor(number,isPrime) {
		this.number= number;
		this.isPrime = isPrime;
		this.checked = false;
	}
}
var test = new Test();
test.main();