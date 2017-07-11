//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.
order('Lobster','Wild Rice','Wine');


// WRITE YOUR CODE BELOW
function searchAndGrab(option){
        for(i=0;i<arrayLength;i++){
            tempObject = arrayOfObjects[i];
            var tempName = tempObject.name;
            if(option==tempName){
            var time = parseInt(tempObject.time);
            var price = parseInt(tempObject.price);
            return {option: option, time: time, price: price};
    //{option: option, time: time, price: price}
        
    }
    } 
        return (null);
}


function order(option1 , option2, option3){
    global.window=global;                                       //Defining Global Variables - browse does not support
    window.arrayOfObjects = generateMenu();                     //Defining Global Variables
    window.arrayLength = arrayOfObjects.length;                 //Defining Global Variables
    console.log('Number of Food Options in our Menu: '+arrayLength);
    var okOrders=0;
    window.meal1 = searchAndGrab(option1);                      //Defining Global Variables
    if (meal1 !=null){okOrders++}
    window.meal2 = searchAndGrab(option2);                      //Defining Global Variables
    if (meal2 !=null){okOrders++}
    window.meal3 = searchAndGrab(option3);                      //Defining Global Variables
    if (meal3 !=null){okOrders++}

if (okOrders===3){
    console.log("Amazing! We will start to cook you dinner, sir!")
    cook(option1,option2,option3);
}
else{
    console.log((3-okOrders)+' wrong order(s). Could you repeat please?');
     option1='Lobster';       //    option1=prompt('Type the first meal:')
     option2='Wild Rice';       //    option2=prompt('Type the second meal:')
     option3='Wine';        //    option3=prompt('Type the third meal:')
    order(option1,option2,option3);
    }
//return; 
}

function cook(option1,option2,option3){
    console.log('############################Cooking############################');    
    console.log('Preparing '+option1+', '+option2+',and '+option3+'.');
    var time1 = parseInt(meal1.time);
    var time2 = parseInt(meal2.time);
    var time3 = parseInt(meal3.time);
    var totalTime=time1+time2+time3;
    console.log('Just Started to cook!We need '+totalTime+'s to prepare your meal!');
    setTimeout(function(){serve(option1,option2,option3)}, (totalTime*1000));
    }

// To illustrate that a function is a value:
// You can pass the name of a function just like another variable
// That code can be executed and used in many contexts
// function whatShouldIDo(toDo){
//     toDo()
// }

// whatShouldIDo(serve)
// whatShouldIDo(cook)

function serve(option1,option2,option3){
    console.log('############################Serving############################');    
    console.log("Finished!");
    //var arrayOfObjects = generateMenu();
    // var arrayLength = arrayOfObjects.length;
    var price1 = parseInt(meal1.price);
    var price2 = parseInt(meal2.price);
    var price3 = parseInt(meal3.price);
    var totalPrice = price1+price2+price3;
    console.log('I expect that you enjoy your dinner! The total value of your dinner is '+totalPrice+'$.')
}


function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}