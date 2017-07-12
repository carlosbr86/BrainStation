var request = require("request");
var cheerio = require("cheerio");

//STORE ALL THE URLS in a ARRAY!!!
let url = ["https://www.reddit.com/","https://www.reddit.com/?count=25&after=t3_66pqqa","https://www.reddit.com/?count=50&after=t3_66paff","https://www.reddit.com/?count=75&after=t3_66p5p5"];
for (let i=0;i<url.length;i++){  //Lopping through the array
    request(url[i], function (error, response, body) {
      if (!error) {
          var $ = cheerio.load(body);
          console.log( `################################# HOME PAGE ${i} #######################################\n\n \n\n`);
          var titles = $("a[data-event-action='title']").each(function(index){
              console.log(`${index}->${$(this).text()}`);
              });
      } else {
        console.log("We’ve encountered an error: " + error);
      }
    });
}