 
 function changeradius() { 

   var data=document.getElementById('radius2');
   
   var status=document.getElementById('SliderStatus');
   status.innerHTML=data.value;
   var data2=document.getElementById('speed').value;
   document.getElementById('speedvalue').innerHTML=data2;   
   var data3=document.getElementById('numberofball').value;
   document.getElementById('nmbrofball').innerHTML=data3;

 var canvas=document.querySelector('canvas');
 canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
 var c=canvas.getContext('2d');



 
 
 
 function Circle(x,y,dx,dy,radius)
 { this.x=x;
   this.y=y;
   this.dx=dx;
   this.dy=dy;
   this.radius=radius;

   this.draw=function(){
                              c.beginPath();
                              c.arc(this.x,this.y,this.radius,0,Math.PI*2,0);
                              c.strokeStyle="green";
                              c.stroke();

                              
                              c.fillStyle="blue";
                              c.fill(); 


                              
                    }

      this.update=function()
      {        
 
              if (this.x+this.radius>innerWidth||this.x-this.radius<0)

                      { this.dx=-this.dx;
                  
                       }
              if( this.y+this.radius>innerHeight||this.y-this.radius<0)

                    { this.dy=-this.dy
                     }
            this.x+=this.dx;
            this.y+=this.dy;

            this.draw();

 
    } 
 }  

 var circlearray=[];
 
  var radius=data.value;

 for( var i=0; i<data3; i++)
 {  var x=Math.random()*innerWidth;
    var y=Math.random()*innerHeight;
    var dx=(Math.random()-0.5)*data2*40;
    var dy=(Math.random()-0.5)*data2*50; 
    
  
  circlearray.push(new Circle(x,y,dx,dy,radius));
}




  



function animate()
 {    
  
          requestAnimationFrame(animate);
         c.clearRect(0,0,innerWidth,innerHeight);

            
 for( var i=0; i<circlearray.length; i++)
     { circlearray[i].update();
     }
            
    
} 
 animate();

}

changeradius();
