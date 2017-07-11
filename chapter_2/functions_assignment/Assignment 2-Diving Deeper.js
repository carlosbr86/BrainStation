//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.
order('Lobster','Wild Rice','Wine', 'Steak', 'Burger');
//order('Steak', 'Burger');
//order('Lobsxter','Wixld Rice','Wine', 'Steak', 'Burger', 'Pizza');


// WRITE YOUR CODE BELOW
function searchAndGrab(name){
        for(i=0;i<arrayLength;i++){
            tempObject = arrayOfObjects[i];
            var tempName = tempObject.name;
            if(name==tempName){
            var time = parseInt(tempObject.time);
            var price = parseInt(tempObject.price);
            return {name, time, price};
         }
             
    } 
            return (null);
}


function order(){
    var orders = [];
    var numberOfOrders= arguments.length;
    for (i = 0; i < arguments.length; i++) {
        orders[i] = arguments[i];
    }
    // global.window=global;                                       //Defining Global Variables

    arrayOfObjects = generateMenu();                     //Defining Global Variables
    arrayLength = arrayOfObjects.length;                 //Defining Global Variables
    console.log('Number of Food Options in our Menu: '+arrayLength);
    var okOrders=0;
    var notOkOrders=0;
    mealDetails=[];
    for (var i = 0; i < numberOfOrders; i++) {
            mealDetails[i] = searchAndGrab(orders[i]);
            if(mealDetails[i]!==null){
                okOrders=okOrders+1;
            }
            else{
                notOkOrders=notOkOrders+1;
            }
    }

if (okOrders>3 && notOkOrders==0){
    console.log("Amazing! We will start to cook you dinner, sir!")

    cook(mealDetails);
}
else{
    console.log('Wrong order. Could you repeat please?');
     option1='Lobster';       //    option1=prompt('Type the first meal:')
     option2='Wild Rice';       //    option2=prompt('Type the second meal:')
     option3='Wine';        //    option3=prompt('Type the third meal:')
//    order(option1,option2,option3);
    }
//return; 
}

function cook(){
    var mealToCook = arguments[0];
    console.log('############################Cooking############################');    
    var numbersOfMeal = mealToCook.length;
    var totalTime=0
    var cookingMessage = 'Preparing: ';
    for(var i=0;i<numbersOfMeal;i++){
        var totalTime= totalTime + mealToCook[i].time;
        if(i<numbersOfMeal-1){
            var cookingMessage = cookingMessage + mealToCook[i].name + ', ';
        }
        else{
            var cookingMessage = cookingMessage +'and '+mealToCook[i].name+'.';
        }
    }
    console.log(cookingMessage);

        console.log('Just Started to cook!We need '+totalTime+'s to prepare your meal!');
    setTimeout(function(){serve(mealToCook)}, (totalTime*1000));
    }

function serve(){
    console.log('############################Serving############################');    
    var mealToServ = arguments[0];    
    var numbersOfMeal = mealToServ.length;
    var totalPrice=0
    for(var i=0;i<numbersOfMeal;i++){
        var totalPrice= totalPrice + mealToServ[i].price;
    }
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