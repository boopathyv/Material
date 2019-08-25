var readline = require('readline');
class Gangs {
	constructor(){
		this.compositeGang = 0;
		this.primeGang = 0;
		this.data = {};
	}
	
	main(data) {
		var keys = Object.keys(data);

		keys.map(key=>{
		    this.primeGang = 0;
		    this.compositeGang = 0;
			let splits = key.split(',');
			let rows = splits[1];
			let columns = splits[2];
			let arr = data[key];
			let array = [];
			for (var i = 0; i < rows; i++) {
				array[i] = [];
				for (var j = 0; j < columns; j++) {
					var number = arr[i][j];
					var isPrime = this.isPrimeNumber(number);
					array[i][j] = new Node(number,isPrime);
				}
			}
					
			this.checkForCompositeGangs(array,rows,columns);
			console.log(this.primeGang+' '+this.compositeGang);
		});
	}

	readData(){
			var array = this.getData();
	        var testCases = 0;
		    var count = 0;
		    var rowColNum = false;
		    var rowCount = 0;
		    var row = 0;
		    var column = 0;
            for (let index = 0; index < array.length; index++) {
				let line = array[index];
				if(count === 0){
    				count++;
				    testCases++;
				    rowColNum = true;
			    }else if(rowColNum){
                    let seps = line.split(' ');
				    row = parseInt(seps[0]);
				    column = parseInt(seps[1]);
				    rowCount = 0;
				    rowColNum = false;
                }else{
    				var key = testCases+','+row+','+column;
				    if(this.data[key] === undefined){
    					this.data[key] = [];
				    }
				    this.data[key][rowCount] = [];
				    let seps = line.split(' ');
				    seps.map(number=>{
    					this.data[key][rowCount].push(number);
				    });
				    if(rowCount === row-1){
    					rowColNum = true;
					    testCases++;
				    }
				    rowCount++;
			    }
			}
			this.main(this.data);
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
	    if(parseInt(number) === 2) {
    		return true;
    	}
    	if(parseInt(number) % 2 === 0) {
		    return false;
	    }
	    for (var i = 2; i < parseInt(number)/2+1; i++) {
    		if(parseInt(number) % i === 0) {
			    return false;
		    }
	    }
	    return true;
	}
	
	getData(){
		return [
			"16",
			"1 1",
			"2",
			"1 1",
			"4",
			"3 1",
			"2",
			"4",
			"2",
			"1 3",
			"4 2 4",
			"3 2",
			"3 6",
			"9 4",
			"9 3",
			"4 5",
			"6 5 3 2 9",
			"3 2 7 6 8",
			"6 6 7 2 6",
			"6 5 6 9 5",
			"2 11",
			"5 4 6 7 9 9 8 2 6 2 5",
			"7 3 5 2 6 6 6 2 6 9 5",
			"8 7",
			"3 6 8 5 6 7 8",
			"2 4 2 7 8 5 5",
			"3 7 6 4 9 7 2",
			"9 6 5 3 5 4 2",
			"4 6 3 4 5 2 8",
			"3 3 2 4 7 9 2",
			"6 2 9 4 6 4 7",
			"9 4 9 2 8 5 9",
			"20 19",
			"6 8 6 2 2 3 4 5 5 6 3 8 8 5 3 2 5 8 7",
			"8 4 2 2 9 9 9 5 2 7 4 3 9 5 4 3 2 4 9",
			"6 8 7 8 7 7 7 4 6 3 7 4 9 9 6 4 7 4 3",
			"5 4 9 4 7 5 5 7 6 8 9 5 7 3 4 8 6 4 8",
			"5 5 7 8 5 4 4 5 4 9 9 7 7 8 5 9 9 3 5",
			"5 9 8 9 6 3 9 6 4 2 3 8 9 7 4 7 7 9 8",
			"5 4 3 3 6 8 9 7 2 2 8 6 2 3 6 8 9 8 8",
			"8 7 7 4 9 5 2 4 7 7 2 6 3 4 7 2 5 7 6",
			"3 5 6 9 5 7 5 4 8 6 4 7 6 9 7 8 5 5 7",
			"9 6 6 3 2 8 7 2 6 7 8 4 7 5 9 4 3 8 6",
			"4 4 7 3 4 4 4 8 2 3 2 9 4 8 9 9 3 5 6",
			"5 9 4 6 7 5 6 2 6 7 8 5 3 6 7 2 9 9 2",
			"4 7 5 4 4 7 3 5 7 4 5 6 2 8 7 3 5 6 9",
			"6 7 9 2 6 7 3 8 4 6 5 7 3 9 7 6 6 3 2",
			"9 5 9 4 7 6 6 2 8 2 7 8 6 9 7 5 7 6 9",
			"8 3 3 6 5 9 7 9 3 6 7 9 4 9 3 9 9 9 8",
			"7 3 9 5 8 4 5 9 3 8 8 6 3 6 7 8 2 8 3",
			"9 7 7 8 4 2 3 6 3 9 7 8 6 5 4 9 2 9 6",
			"8 4 6 2 3 7 8 8 6 4 2 6 7 8 8 2 6 9 9",
			"8 7 5 2 5 5 7 9 4 2 4 2 5 9 2 2 5 5 5",
			"5 1",
			"12",
			"43",
			"33",
			"17",
			"42",
			"1 6",
			"91 27 72 38 52 47",
			"4 6",
			"47 16 94 76 68 46",
			"38 35 69 97 45 56",
			"67 67 83 68 74 15",
			"89 59 78 35 98 50",
			"6 13",
			"10 10 96 88 75 68 36 53 81 49 64 86 18",
			"45 91 86 37 41 22 50 77 19 91 73 95 58",
			"61 59 86 84 80 92 75 44 98 65 36 33 70",
			"89 77 42 10 17 34 10 22 82 74 14 84 82",
			"34 77 90 42 12 61 46 37 75 59 43 86 79",
			"36 26 20 41 29 16 72 42 31 56 24 76 70",
			"7 11",
			"52 77 38 30 55 92 12 37 51 88 98",
			"11 79 12 75 55 41 53 15 22 61 39",
			"91 97 67 63 32 58 72 25 51 56 35",
			"83 14 29 57 95 32 57 17 92 30 57",
			"68 92 53 37 31 32 70 88 40 28 72",
			"63 15 36 13 77 31 85 34 14 21 47",
			"36 81 89 32 54 36 59 94 47 93 13",
			"14 10",
			"44 73 68 49 93 38 68 19 48 90",
			"99 56 61 13 74 30 84 91 72 69",
			"10 99 53 53 53 33 67 48 88 78",
			"37 30 14 17 48 42 61 54 21 22",
			"97 70 12 48 45 61 16 55 33 56",
			"44 74 40 57 14 64 35 48 77 78",
			"58 80 81 14 40 70 13 25 28 36",
			"25 15 90 24 90 20 60 95 10 58",
			"75 43 63 55 71 31 13 27 15 21",
			"20 19 38 12 38 42 63 66 57 12",
			"28 39 18 68 35 46 94 45 48 51",
			"59 87 19 91 34 38 71 67 61 35",
			"47 62 94 61 33 94 75 17 23 34",
			"76 32 14 65 51 59 97 14 56 90",
			"4 14",
			"78 35 62 85 41 82 85 32 78 33 73 67 60 59",
			"77 58 36 29 24 88 74 11 10 26 24 86 20 22",
			"38 80 84 26 42 20 23 19 88 89 67 30 11 58",
			"33 59 95 85 30 76 19 68 37 74 17 15 59 52"
		];
	}
}

class Node{
	constructor(number,isPrime) {
		this.number= number;
		this.isPrime = isPrime;
		this.checked = false;
	}
}

var gangs = new Gangs();
gangs.readData();
