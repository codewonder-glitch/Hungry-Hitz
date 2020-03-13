function init()
{
document.getElementById("sym1").src="../Images/Burger.jpg";



}
init();

document.getElementById("bstart").addEventListener("click", function(){
    Random();
    
  });
  var img=["../Images/Milkshake.jpg","../Images/Burger.jpg","../Images/Fries.jpg","../Images/Cola.jpg","../Images/Chicken.jpg","../Images/Pizza.jpg"]; 
  Random=()=>
  {
    var a=$(container).children();
    var b=a.children();
    console.log(b);
    console.log(b[1]);
    b[1].src=img[2];
    for(let i=0;i<=b.length;i++)
{

}

  }


 