
var rowarr=[];
var credit=0;
var session_gamepays=0;
var Gamepays=0;
var a=$(container).children();
var imgdiv=a.children();
var autospin=false;
var flag=true;
var count=10;


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
var WinCombo=[[0,1,2],
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
  
  // $(credits).val(credit);
  // if($(credit)>0)
  // $(bstart).prop("disabled",false);
  // else
  // $(bstart).prop("disabled",true);

}
init();


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
    // $(bstart).trigger("click");
    if (self.playStatus != 'playing') 
     $(spin).get(0).play();
 
    Random();
    
  });
 
  Random=()=>
  {
    Gamepays=0;
 $(gamepay).val(Gamepays);
 if(autospin==false)
    credit--;
    if(credit>=0)
    $(credits).val(credit);
    if(credit==0){
alert(session_gamepays);
      session_gamepays=0;
    }
 
   if(credit<=0 && Autoplay==false)
   {
    if (self.playStatus != 'playing') {
      $(lost).get(0).play();
    }
 
    //  document.getElementById(bstart).setAttribute("disabled",true);
    // $(bstart).attr("disabled",true);
return;
   }
   
    
   
  
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
  Gamepays+=rowarr[x];
  session_gamepays+=rowarr[x];
  $(gamepay).val(Gamepays);
  $(credits).val(credit);
    // alert("cgfdgh");
    // $(this).stop();
// $(imgdiv[y]).stop();
// $(imgdiv[z]).stop();

// console.log("queued element x is" +$(imgdiv[x]).queue());
//     $(imgdiv[x]).stop(true,true).animate(
//         { deg: 360 },
//         {
//           duration: 1200,
//         //   queue:false,
//           step: function(now) {
//             $(this).css({ transform: 'rotate(' + now + 'deg)' });
//           }
//         }
//       );
  

      // console.log("queued element y is" +$(imgdiv[y]).queue());
      // $(imgdiv[y]).stop(true,true).animate(
      //   { deg: 360 },
      //   {
      //     duration: 1200,
      //   //   queue:false,
      //     step: function(now) {
      //       $(this).css({ transform: 'rotate(' + now + 'deg)' },
      //       );
      //     }
      //   }
        
      // );
    

      
      // console.log("queued element z is" +$(imgdiv[z]).queue());
      // $(imgdiv[z]).stop(true,true).animate(
      //   { deg: 360 },
      //   {
      //     duration: 1200,
      //   //   queue:false,
      //     step: function(now) {
      //       $(this).css({ transform: 'rotate(' + now + 'deg)' });
      //     }
      //   },
        
      // );
      // $(imgdiv[i]).attr('src', Object.values(img)[random]);
      // $(won).get(0).play();
      if (self.playStatus != 'playing') {
        $(won).get(0).play();
      }
      $(imgdiv[x]).attr('src',Object.values(gif)[rowarr[x]]);
      $(imgdiv[y]).attr('src',Object.values(gif)[rowarr[x]]);
      $(imgdiv[z]).attr('src',Object.values(gif)[rowarr[x]]);

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
  
   
}else
{
// Gamepays=0;
//   $(gamepay).val(Gamepays);
}

}
rowarr=[];
if(session_gamepays>=5 && flag==true && count>=0)
{
  // alert("autospin");
  autospin=true;
$(bstart).trigger("click");
$(bstart).attr("disabled",true);
count--;
if(count==0)
flag=false;
  
}


}

// function getKeyByValue(object, value) { 
//   return Object.keys(object).find(key =>  
//           object[key] === value); 
// } 


// function togglePlayState(audio) {
//   isPlaying = !isPlaying;  
//   if (isPlaying) {
//     playPromise = playPromise.then(() => {
//       return audioElement.play();
//     });
//   } else {
//     playPromise = playPromise.then(() => {
//       audioElement.pause();
//     });
//   }
// }


  