(function (){
  var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext("2d");
var sequence1=[];
var sequence2=[];
var player=1;
function color(cell){
  if(player==1){
    sequence1.push(cell);
    if(sequence1.includes(0) && sequence1.includes(1) && sequence1.includes(2)) 
      {
        c.beginPath();
        c.moveTo(500,100);
        c.lineTo(850,100);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence1.includes(3) && sequence1.includes(4) && sequence1.includes(5)) 
      {
        c.beginPath();
        c.moveTo(500,200);
        c.lineTo(850,200);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence1.includes(6) && sequence1.includes(7) && sequence1.includes(8)) 
      {
        c.beginPath();
        c.moveTo(500,300);
        c.lineTo(850,300);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence1.includes(0) && sequence1.includes(3) && sequence1.includes(6)) 
      {
        c.beginPath();
        c.moveTo(550,100);
        c.lineTo(550,400);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence1.includes(1) && sequence1.includes(4) && sequence1.includes(7)) 
      {
        c.beginPath();
        c.moveTo(675,50);
        c.lineTo(675,400);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence1.includes(2) && sequence1.includes(5) && sequence1.includes(8)) 
      {
        c.beginPath();
        c.moveTo(760,100);
        c.lineTo(760,400);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence1.includes(0) && sequence1.includes(4) && sequence1.includes(8)) 
      {
        c.beginPath();
        c.moveTo(550,100);
        c.lineTo(820,400);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence1.includes(2) && sequence1.includes(4) && sequence1.includes(6)) 
      {
        c.beginPath();
        c.moveTo(800,100);
        c.lineTo(500,380);
        c.stokeStyle ="green";
        c.stroke();
      }

  let box1= document.createElement("div");
  box1.className="box1";
  box1.style.left = (event.pageX - 4) + "px";
    box1.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(box1);
   player +=1;

}
  else{ 
     sequence2.push(cell);
     if(sequence2.includes(0) && sequence2.includes(1) && sequence2.includes(2)) 
      {
        c.beginPath();
        c.moveTo(500,100);
        c.lineTo(850,100);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence2.includes(3) && sequence2.includes(4) && sequence2.includes(5)) 
      {
        c.beginPath();
        c.moveTo(500,200);
        c.lineTo(850,200);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence2.includes(6) && sequence2.includes(7) && sequence2.includes(8)) 
      {
        c.beginPath();
        c.moveTo(500,300);
        c.lineTo(850,300);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence2.includes(0) && sequence2.includes(3) && sequence2.includes(6)) 
      {
        c.beginPath();
        c.moveTo(550,100);
        c.lineTo(550,400);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence2.includes(1) && sequence2.includes(4) && sequence2.includes(7)) 
      {
        c.beginPath();
        c.moveTo(675,50);
        c.lineTo(675,400);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence2.includes(2) && sequence2.includes(5) && sequence2.includes(8)) 
      {
        c.beginPath();
        c.moveTo(760,100);
        c.lineTo(760,400);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence2.includes(0) && sequence2.includes(4) && sequence2.includes(8)) 
      {
        c.beginPath();
        c.moveTo(550,100);
        c.lineTo(820,400);
        c.stokeStyle ="green";
        c.stroke();
      }
     if(sequence2.includes(2) && sequence2.includes(4) && sequence2.includes(6)) 
      {
        c.beginPath();
        c.moveTo(800,100);
        c.lineTo(500,380);
        c.stokeStyle ="green";
        c.stroke();
      }
   
  let box2= document.createElement("div");
  box2.className="box2";
  box2.style.left = (event.pageX - 4) + "px";
    box2.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(box2);
   player -=1;
                                                  
      }
}
document.querySelectorAll('td').forEach((td,idx)=>td.addEventListener("click",color.bind(null,idx)));  
})();

