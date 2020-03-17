// var img={2:"../Images/Milkshake.jpg",
//   2:"../Images/Burger.jpg",
//   4:"../Images/Fries.jpg",
//   7:"../Images/Cola.jpg",
//   8:"../Images/Chicken.jpg",
//   9:"../Images/Pizza.jpg"
// }; 
//   Random=()=>
//   {
    
    
  
//     for(let i=0;i<6;i++)
// {

// var random=Math.floor(Math.random() * 5);

// console.log(random);
// console.log(Object.values(img)[i]);

// }
//   }
//   Random();

var img={
  1:"../Images/Cola.jpg", 
  2:"../Images/Fries.jpg",
  3:"../Images/Burger.jpg",
  4:"../Images/Milkshake.jpg",
5:"../Images/Chicken.jpg",
6:"../Images/Pizza.jpg",
10:"str"

}; 

var x=Object.keys(img)[6];
//var x=Object.keys(img).find("../Images/Chicken.jpg");
console.log(x);


function getKeyByValue(object, value) { 
  return Object.keys(object).find(key =>  
          object[key] === value); 
} 

var exampleObject = { 
  key1: 'Geeks', 
  key2: 100, 
  key3: 'Javascript' 
}; 

ans = getKeyByValue(exampleObject, 'Geeks'); 
console.log(ans); 