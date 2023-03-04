// check online offline using online offline attribute
function on(){

  document.getElementById('center').style.display="block";
  document.getElementById('online').style.display="block";
  document.getElementById('offline').style.display="none";
  navigator.vibrate([50,100,200]);
  setTimeout(()=>{document.getElementById('online').style.display="none";},3000);
}
function of(){
    navigator.vibrate([50,200,200,200]);
	Audiohelp.pause();
  document.getElementById('center').style.display="none";
  document.getElementById('offline').style.display="block";
}	
//assign variables
		let loader=document.getElementById("loader");
		let restart=document.getElementById("restart");

		let stepone=document.getElementById("step1");
		var steptwo=document.getElementById("step2");
		let stepthree=document.getElementById("step3");
		let stepfour=document.getElementById("step4");
		// var resultbtn=document.getElementById("resultbtn");
      	let  stp1y=Number(document.getElementById('step1y').value);
      	let  stp1n=Number(document.getElementById('step1n').value);
      	let  stp2y=Number(document.getElementById('step2y').value);
      	let  stp2n=Number(document.getElementById('step2n').value);
      	let  stp3y=Number(document.getElementById('step3y').value);
      	let  stp3n=Number(document.getElementById('step3n').value);
      	let  stp4y=Number(document.getElementById('step4y').value);
      	let  stp4n=Number(document.getElementById('step4n').value);
      	// click sound
      	const click=new Audio('sounds/click.mp3');
 
      	// Audiohelp
      	const Audiohelp=new Audio('sounds/help.mp3');
      	function st(){
      		navigator.vibrate([50]);
      		click.play();
      	document.getElementById('step1').style.display='block';document.
      	getElementById('mainpage').style.display='none';
        Audiohelp.play();
      }
//restart
      	function reset(){
      		navigator.vibrate([50]);
      		click.play();
      	loader.style.display="block";
      	document.getElementById('ans').style.display="none";
      	restart.style.display="none";
           	     setTimeout(()=>{loader.style.display="none";location.reload()},3000);}


// step1
      	function stpy1(){
      		navigator.vibrate([50]);
      		Audiohelp.pause();
      		click.play();
           	yc1=stp1y;
           	steptwo.style.display = "block";
           	stepone.style.display = "none";
           	
           }
    function stpn1(){
      		  Audiohelp.pause();
navigator.vibrate([50]);
       click.play();
      	yc1=stp1n;
           steptwo.style.display = "block";
           	stepone.style.display = "none";
           	
           }
// step2
      function stpy2(){
      	navigator.vibrate([50]);
      	  yc2=stp2y;
      	 click.play();
         stepthree.style.display = "block";
           	steptwo.style.display = "none";
           	
           }
           function stpn2(){
           	navigator.vibrate([50]);
           	click.play();
      	 yc2=stp1n;
         stepthree.style.display = "block";
           	steptwo.style.display = "none";
           
           }
//step3
           function stpy3(){
           	navigator.vibrate([50]);
           	click.play();
      	 yc3=stp3y;
        stepfour.style.display = "block";
           	stepthree.style.display = "none";
           
           }
           function stpn3(){
           	navigator.vibrate([50]);
           	click.play();
           	stepfour.style.display = "block";
           	stepthree.style.display = "none";
      	 yc3=stp3n;

           }
 //step4
           function stpy4(){
           	navigator.vibrate([50]);
      	 yc4=stp4y;
      	click.play();
         // resultbtn.style.display = "block";
           	stepfour.style.display = "none";
           	loader.style.display="block";
           	      setTimeout(answer,1000);

           }
           function stpn4(){
           	navigator.vibrate([50]);
           	click.play();
           	loader.style.display="block";

           	// resultbtn.style.display = "block";
           	stepfour.style.display = "none";
      	 yc4=stp4n;

           	      setTimeout(answer,1700);

           }

   //answer   
      function answer() {

         // resultbtn.style.display = "none";
           	loader.style.display="none";
           	restart.style.display="block";
        
       
      	var result=yc1+yc2+yc3+yc4;
      	console.log(result);
      	// function sound(){
      	// var snd = new Audio('onru.mp3')//wav is also supported
        //  snd.play()}
//using switch case
switch (result) {case 0:answer="'FIVE'";new Audio('sounds/five.mp3').play();break;case 10:answer = "'FOUR'";new Audio('sounds/four.mp3').play();break;case 20:answer = "'SIX'";new Audio('sounds/six.mp3').play();break;case 30:answer = "'ZERO'";new Audio('sounds/zero.mp3').play();break;case 40:answer = "'ONE'";new Audio('sounds/one.mp3').play();break;case 50:answer = "'TWO'";new Audio('sounds/two.mp3').play();break;case 60:answer = "'TEN'";new Audio('sounds/ten.mp3').play();break;case  70:answer = "'THREE'";new Audio('sounds/three.mp3').play();break;case  80:answer = "'NINE'";new Audio('sounds/nine.mp3').play();break;case  90:answer = "'SEVEN'";new Audio('sounds/seven.mp3').play();break;case  100:answer = "'EIGHT'";new Audio('sounds/eight.mp3').play();}

      	document.getElementById('ans').innerHTML="The Number You Thought of Was"+"  :"+'<i>'+answer+'</i>';
      }

      // feedback confirmation
	function feedback(){
       if (confirm("opening Gmail or Email")) {
          document.getElementById('fb').href ="mailto:mohammmadibbu008@gmail.com";
          navigator.vibrate([50,100,50]);
          setTimeout(()=>{document.getElementById('fb').href ="#";},2000);
        }else{document.getElementById('fb').href ="#";navigator.vibrate([100]);}
}
