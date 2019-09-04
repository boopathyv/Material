function* checkBlock(block,start,end){
	var start;
	var end;
	var block;
	while(block >= start && block <= end){
		yield getBlock(block++);
	}
}
var generator = checkBlock(100,100,110);

function getBlock(block){
	setTimeout(
	()=>{
		console.log(block);
		generator.next();
	},1000);
}

generator.next();
console.log('completed');