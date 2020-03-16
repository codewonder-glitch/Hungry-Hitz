
var rowarr=[];
var colarr=[];
var diagarr=[];
var credit=0;
var a=$(container).children();
var imgdiv=a.children();

function init()
{
  $(bstart).attr("disabled",true);
  
  // $(credits).val(credit);
  // if($(credit)>0)
  // $(bstart).prop("disabled",false);
  // else
  // $(bstart).prop("disabled",true);

}
init();

var WinCombo=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

$(credits).bind("click", function(event){
  event.preventDefault();
credit+=2;
$(credits).val(credit);
if(credit>0)
{
  $(bstart).attr("disabled",false);
}
});

document.getElementById("bstart").addEventListener("click", function(event){
    // $(sound).play();
    event.preventDefault();
    Random();
    
  });
  var img={
    1:"../Images/Cola.jpg", 
    2:"../Images/Fries.jpg",
    3:"../Images/Burger.jpg",
    4:"../Images/Milkshake.jpg",
 5:"../Images/Chicken.jpg",
  6:"../Images/Pizza.jpg"
}; 
  Random=()=>
  {
       
    credit--;

   if($(credits).val()<=0)
   {
    //  document.getElementById(bstart).setAttribute("disabled",true);
    $(bstart).attr("disabled",true);
return;
   }

    
    $(credits).val(credit);
  
    for(let i=0;i<imgdiv.length;i++)
{

var random=Math.floor(Math.random() * 6);
rowarr.push(random);
console.log(random);
$(imgdiv[i]).attr('src', Object.values(img)[random]);
// imgdiv[i].src=Object.values(img)[random];
$(imgdiv[i]).removeAttr("style");
$(imgdiv[i]).finish();


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

  credit+=rowarr[x] ; 
  $(credits).val(credit);
    // alert("cgfdgh");
    $(this).stop();
// $(imgdiv[y]).stop();
// $(imgdiv[z]).stop();

console.log("queued element x is" +$(imgdiv[x]).queue());
    $(imgdiv[x]).stop(true,true).animate(
        { deg: 360 },
        {
          duration: 1200,
        //   queue:false,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
  

      console.log("queued element y is" +$(imgdiv[y]).queue());
      $(imgdiv[y]).stop(true,true).animate(
        { deg: 360 },
        {
          duration: 1200,
        //   queue:false,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' },
            );
          }
        }
        
      );
    

      
      console.log("queued element z is" +$(imgdiv[z]).queue());
      $(imgdiv[z]).stop(true,true).animate(
        { deg: 360 },
        {
          duration: 1200,
        //   queue:false,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        },
        
      );
   

      // $("div").hover(function(){
      //   if (!$(this).hasClass('animated')) {
      //     $(this).dequeue().stop().animate({ width: "200px" });
      //   }
      // }, function() {
      //     $(this).addClass('animated').animate({ width: "100px" }, "normal", "linear", function() {
      //     $(this).removeClass('animated').dequeue();
      //   });
      // });


    //   $("#animate-test div").hover(function(){
    //     $(this).filter(':not(:animated)').animate({ width: "200px" });
    // }, function() {
    //     $(this).animate({ width: "100px" });
    // });
  
   
}

}
$("img").removeAttr("style");
rowarr=[];

}

function getKeyByValue(object, value) { 
  return Object.keys(object).find(key =>  
          object[key] === value); 
} 



// $("#sec").css({
//     "transform": "rotate(45deg)"
//   });
  