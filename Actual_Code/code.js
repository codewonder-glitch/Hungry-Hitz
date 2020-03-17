
var rowarr=[];
var credit=0;
var Gamepays=0;
var a=$(container).children();
var imgdiv=a.children();

var img={
    1:"../Images/Cola.jpg", 
    2:"../Images/Fries.jpg",
    3:"../Images/Burger.jpg",
    4:"../Images/Milkshake.jpg",
    5:"../Images/Chicken.jpg",
    6:"../Images/Pizza.jpg"
}; 

var gif={
    1:"../Images/colagif.gif", 
    2:"../Images/Friesgif.gif",
    3:"../Images/Burgergif.gif",
    4:"../Images/Milkshakegif.gif",
    5:"../Images/Chicken.gif",
    6:"../Images/pizzagif.gif"
}; 
var WinCombo=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function init()
{
    $(gamepay).attr("disabled",true);
    $(bstart).attr("disabled",true);
}
init();

$(Info).bind("click", function(event){
  window.location.href="info.html";
});

$(credits).bind("click", function(event){
    event.preventDefault();
    if (self.playStatus != 'playing')  
    $(addcredit).get(0).play();
    credit+=2;
    $(credits).val(credit);
      if(credit>0)
      {
        $(bstart).attr("disabled",false);
      }
});

$(bstart).bind("click", function(event){
    event.preventDefault();
    if (self.playStatus != 'playing') 
     $(spin).get(0).play();
      Random();
});
 
  Random=()=>
  {
    
      credit--;
    if(credit>=0)
      $(credits).val(credit);
    if(credit==0){
      // alert(Gamepays);
      Gamepays=0;
      $(gamepay).val(Gamepays);
    }
 
   if(credit<=0 )
   {
      if (self.playStatus != 'playing') {
      $(lost).get(0).play();
      }  
      return;
   } 

    for(let i=0;i<imgdiv.length;i++)
    {
      var random=Math.floor(Math.random() * 6);
      rowarr.push(random);
      console.log(random);
      $(imgdiv[i]).attr('src', Object.values(img)[random]);
    }
      Animater();
  } 


Animater=()=>{
    for(let i=0;i<WinCombo.length;i++)
  {
      let x=WinCombo[i][0];
      let y=WinCombo[i][1];
      let z=WinCombo[i][2];
        if(rowarr[x]==rowarr[y])
          if(rowarr[x]==rowarr[z])
        {
          var Amt=Number(Object.keys(img)[rowarr[x]]);
          
          Gamepays+=Amt;
          
          $(gamepay).val(Gamepays);
               
          if (self.playStatus != 'playing') {
            $(won).get(0).play();
          }
          $(imgdiv[x]).attr('src',Object.values(gif)[rowarr[x]]);
          $(imgdiv[y]).attr('src',Object.values(gif)[rowarr[x]]);
          $(imgdiv[z]).attr('src',Object.values(gif)[rowarr[x]]);
   
        }
  }
          rowarr=[];

}




  