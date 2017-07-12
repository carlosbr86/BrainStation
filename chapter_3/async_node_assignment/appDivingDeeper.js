const fs = require("fs");

function ask() {
    process.stdout.write('\n\n\n1:Casper\n2:Star Wars\n3:Diamond\n Choose a file.');
    process.stdout.write("   >   ");
}
ask();
process.stdin.on('data', function(data){
 //   process.stdout.write('\n'+data.toString().trim()+ '\n');
    let choice = './Arts/casper.txt';
    if(data==1) choice='./Arts/casper.txt';
    if(data==2) choice='./Arts/space.txt';
    if(data==3) choice='./Arts/diamond.txt';
    fs.readFile(choice, 'utf8', function(err, data) {  
        if (err) throw err;
    //    console.log(data);
        let zipped='';
        //ZIP
        for (var i=1;i<=data.length;i++){
            count=1;
            while(data.charAt(i)===data.charAt(i-1)){
                count++;
                i++;
            }
            zipped= zipped + count+ data.charAt(i-1);
        }

        let zipRate = Math.round((1-(zipped.length/data.length))*100);
        let unzipedFile='';
        //Unzip ---------------------------
        for (var i=0;i<zipped.length;i++){ 
            let charSequence='';
            let repetion=0;
            if(zipped.charAt(i)==='\n'){ //break line..... Isolated condition, because is not coded.
                charSequence='\n';
            }
            else{
                if(isNaN(parseInt(zipped.charAt(i)))){ // IF charAt(i) IS NOT A NUMBER - Is a char to be printed
                    repetition = parseInt(zipped.charAt(i-1));
                    if(!isNaN(zipped.charAt(i-2)+zipped.charAt(i-1))){                //Number of 2 digits condition
                        repetition = parseInt(zipped.charAt(i-2)+zipped.charAt(i-1))
                        } 
                    if(isNaN(repetition)){
                        charSequence=zipped.charAt(i);
                    }
                    else{
                        for(let j=0;j<repetition;j++){
                            charSequence=charSequence+zipped.charAt(i);
                        }
                    }
                }
            }
            unzipedFile=unzipedFile+charSequence;
        }
        
        console.log(`ZIPPED FILE:\n${zipped}\n\n\n`);
        console.log(`Saved Space after compressing: ${zipRate}%\n`);
        process.stdout.write('Press return to continue...');
        process.stdin.on('data', function(data){
        fs.writeFile("unziped.txt", zipped, 'utf8', (err) => {
            if (err) throw err;
            console.log(unzipedFile+'\n');
            process.exit();
        });
    });
         })
})

