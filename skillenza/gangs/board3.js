var readline = require('readline');
class Gangs {
	constructor(){
		this.compositeGang = 0;
		this.primeGang = 0;
	}
	
	main() {
		var data = this.readData();
		var keys = Object.keys(data);

		keys.map(key=>{
		    console.log(key);
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
	    return new Promise((resolve,reject)=>{
	        var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
                terminal: false
		    });
		    var testCases = 0;
		    var count = 0;
		    var rowColNum = false;
		    var rowCount = 0;
		    var row = 0;
		    var column = 0;
		    var data = {};
            rl.on('line', function(line){
                console.log('rowcol',rowColNum)
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
				    if(data[key] === undefined){
    					data[key] = [];
				    }
				    data[key][rowCount] = [];
				    let seps = line.split(' ');
				    seps.map(number=>{
    					data[key][rowCount].push(number);
				    })
				    if(rowCount === row-1){
    					rowColNum = true;
					    testCases++;
				    }
				    rowCount++;
			    }
		    });
		    resolve(data);
        });
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
}

class Node{
	constructor(number,isPrime) {
		this.number= number;
		this.isPrime = isPrime;
		this.checked = false;
	}
}

var gangs = new Gangs();
gangs.main();
