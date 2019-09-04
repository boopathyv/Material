var time = 600;
function* checkBlock(block,start,end){
	var start;
	var end;
	var block;
	while(block >= start && block <= end){
		yield getBlock(block++);
	}
}
var generator = checkBlock(100,100,100000);

function getBlock(block){
	time = time - 50;
	setTimeout(
	()=>{
		console.log(block);
		generator.next();
	},time);
}

generator.next();
console.log('completed');