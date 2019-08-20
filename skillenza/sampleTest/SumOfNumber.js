var readline = require('readline');
class solution{
    readData(){
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });
        var count = 0;
        rl.on('line', function(line){
            if(count > 0){
                let seps = line.split(' ');
                let sum = parseInt(seps[0])+parseInt(seps[1]);
                console.log(sum);
            }
            count++;
        });
    }
}

new solution().readData();