const https = require('https'); // Requeiring https
const myApiKey = '9e403403ec5a76fd5a354d44e8604726'; 

https.get("https://api.darksky.net/forecast/" + myApiKey +"/37.8267,-122.4233?exclude=[minutely,hourly,daily,alerts,flags]",(res)=>{
      console.log("################################## Status ###################################");
      console.log('statusCode:', res.statusCode);
      let stringData = '';
      res.on('data', chunk =>{
            stringData += chunk;
   })
   let objectData ='';
    res.on('end', res=>{
      let objectData = JSON.parse(stringData);
            console.log("\n################# When we receive, it is  a string.############################\n");
      console.log (stringData);
      console.log("\n\n\n################################### After Json.parse, it is an object ##################################\n");
      console.log (objectData);

      console.log(`\n\n\nCurrent Weather in ${objectData.timezone}<br>
        - temperature: ${objectData.currently.temperature} degrees Celsius<br>
        - summary: ${objectData.currently.icon}  \n\n`);

   })


}).on('error', (e) => {
    console.log("###################################### Error ######################################");
    console.error(e);
});