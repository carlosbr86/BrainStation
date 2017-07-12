const express = require('express'),
    app = express(); 
const path = require('path');
const fs = require('fs');

var articles = [    // Defining a initial text! I couldn't finish yet. But I will try to do after
    {
        articleAuthor:"Robert Frost"
        ,articleContent:"Whose woods these are I think I know.↵His house is in the village, though;↵He will not see me stopping here↵To watch his woods fill up with snow.↵My little horse must think it queer↵To stop without a farmhouse near↵Between the woods and frozen lake↵The darkest evening of the year.↵↵He gives his harness bells a shake↵To ask if there is some mistake.↵The only other sound's the sweep↵Of easy wind and downy flake.↵The woods are lovely, dark and deep,↵But I have promises to keep,↵And miles to go before I sleep,↵And miles to go before I sleep."
        ,articleDiv:"<div id='box 2017004656'><span id >Published on: 25/4/2017 at 16:50:28 TAG: 2017004656</span><span id='title'>Stopping by Woods on a Snowy Evening↵</span><span id='author'>Robert Frost↵</span><span id='content'>Whose woods these are I think I know.↵His house is in the village, though;↵He will not see me stopping here↵To watch his woods fill up with snow.↵My little horse must think it queer↵To stop without a farmhouse near↵Between the woods and frozen lake↵The darkest evening of the year.↵↵He gives his harness bells a shake↵To ask if there is some mistake.↵The only other sound's the sweep↵Of easy wind and downy flake.↵The woods are lovely, dark and deep,↵But I have promises to keep,↵And miles to go before I sleep,↵And miles to go before I sleep.<br><br> </span></div>"
        ,articleTag:"2017004656"
        ,articleTimeStamp:"Published on: 25/4/2017 at 16:50:28"
        ,articleTitle:"Stopping by Woods on a Snowy Evening"
    },
    {
        articleAuthor:"Robert Frost"
        ,articleContent:"Whose woods these are I think I know.↵His house is in the village, though;↵He will not see me stopping here↵To watch his woods fill up with snow.↵My little horse must think it queer↵To stop without a farmhouse near↵Between the woods and frozen lake↵The darkest evening of the year.↵↵He gives his harness bells a shake↵To ask if there is some mistake.↵The only other sound's the sweep↵Of easy wind and downy flake.↵The woods are lovely, dark and deep,↵But I have promises to keep,↵And miles to go before I sleep,↵And miles to go before I sleep."
        ,articleDiv:"<div id='box 2017004656'><span id >Published on: 25/4/2017 at 16:50:28 TAG: 2017004656</span><span id='title'>Stopping by Woods on a Snowy Evening↵</span><span id='author'>Robert Frost↵</span><span id='content'>Whose woods these are I think I know.↵His house is in the village, though;↵He will not see me stopping here↵To watch his woods fill up with snow.↵My little horse must think it queer↵To stop without a farmhouse near↵Between the woods and frozen lake↵The darkest evening of the year.↵↵He gives his harness bells a shake↵To ask if there is some mistake.↵The only other sound's the sweep↵Of easy wind and downy flake.↵The woods are lovely, dark and deep,↵But I have promises to keep,↵And miles to go before I sleep,↵And miles to go before I sleep.<br><br> </span></div>"
        ,articleTag:"2017004656"
        ,articleTimeStamp:"Published on: 25/4/2017 at 16:50:28"
        ,articleTitle:"Stopping by Woods on a Snowy Evening"
    },
    {
        articleAuthor:"Langston Hughes"
        ,articleContent:"I went down to the river,↵I set down on the bank.↵I tried to think but couldn't,↵So I jumped in and sank.↵↵I came up once and hollered!↵I came up twice and cried!↵If that water hadn't a-been so cold↵I might've sunk and died.↵↵But it was Cold in that water! It was cold!↵↵I took the elevator↵Sixteen floors above the ground.↵I thought about my baby↵And thought I would jump down.↵↵I stood there and I hollered!↵I stood there and I cried!↵If it hadn't a-been so high↵I might've jumped and died.↵↵But it was High up there! It was high!↵↵So since I'm still here livin',↵I guess I will live on.↵I could've died for love--↵But for livin' I was born↵↵Though you may hear me holler,↵And you may see me cry--↵I'll be dogged, sweet baby,↵If you gonna see me die.↵↵Life is fine! Fine as wine! Life is fine!"
        ,articleDiv:"<div id='box 2017004495'><span id >Published on: 25/4/2017 at 16:51:7 TAG: 2017004495</span><span id='title'>Life is fine↵</span><span id='author'>Langston Hughes↵</span><span id='content'>I went down to the river,↵I set down on the bank.↵I tried to think but couldn't,↵So I jumped in and sank.↵↵I came up once and hollered!↵I came up twice and cried!↵If that water hadn't a-been so cold↵I might've sunk and died.↵↵But it was Cold in that water! It was cold!↵↵I took the elevator↵Sixteen floors above the ground.↵I thought about my baby↵And thought I would jump down.↵↵I stood there and I hollered!↵I stood there and I cried!↵If it hadn't a-been so high↵I might've jumped and died.↵↵But it was High up there! It was high!↵↵So since I'm still here livin',↵I guess I will live on.↵I could've died for love--↵But for livin' I was born↵↵Though you may hear me holler,↵And you may see me cry--↵I'll be dogged, sweet baby,↵If you gonna see me die.↵↵Life is fine! Fine as wine! Life is fine!<br><br> </span></div>"
        ,articleTag:"2017004495"
        ,articleTimeStamp:"Published on: 25/4/2017 at 16:51:7"
        ,articleTitle:"Life is fine"
    }

];

app.use(express.static('public'));

app.get('/', (req,res)=>{
    console.log("somebody asked for good dogs");
    res.json(articles);
})

app.get('/articles', (req, res) => {
    console.log('somebody asked for articles');
    res.json(articles);
})

// //Reading and Writing File
// fs.writeFile("./journal.txt", newString, 'utf8', (err) => {
//         if (err) throw err;
//         console.log('Writing Journal!');
//     });

// fs.readFile('./journal.txt', 'utf8', (err, data)=> {  
//     if (err) throw err;
//     console.log(`Reading Journal: ${data} `);  
// });
// ############################


app.listen(8080, ()=>{
    console.log('Listening on port 8080!');
});