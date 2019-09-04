var time = 60000;
function* checkBlock(block,start,end){
	var start;
	var end;
	var block;
	while(block >= start && block <= end){
		yield getBlock(block++);
	}
}

function getBlock(block){
	time = time - 5000;
	setTimeout(()=>console.log(block),time);
}

var generator = checkBlock(100,100,110);

for (let index = 100; index <= 110; index++) {
	var some = generator.next();
	console.log('some..',some);
}
console.log('completed');