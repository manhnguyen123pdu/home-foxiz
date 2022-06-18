document.addEventListener('DOMContentLoaded',function(){
var nut=document.querySelectorAll('.n')
var slide= document.querySelectorAll('.sl')

var thoigian=setInterval(function(){
    var danghd=document.querySelector('.active')
    for(hd=0;danghd=danghd.previousElementSibling;hd++){}
   if(hd<2){
    for(n=0;n<nut.length;n++){
       slide[n].classList.remove('active')
       nut[n].classList.remove('xam')
   }
   slide[hd].nextElementSibling.classList.add('active')
   nut[hd].nextElementSibling.classList.add('xam')
   }
   else{
       for(n=0;n<nut.length;n++){
           slide[n].classList.remove('active')
           nut[n].classList.remove('xam')
       }
       slide[0].classList.add('active')
       nut[0].classList.add('xam')  
   }
   
   },4000)
   
for(i=0;i<nut.length;i++){
    nut[i].onclick=function(){
        clearInterval(thoigian)
        for(k=0;k<nut.length;k++){
            nut[k].classList.remove('xam')
            slide[k].classList.remove('active')
        }
     this.classList.add('xam')   
    

     var nutbam=this;
     for(vtn=0;nutbam=nutbam.previousElementSibling;vtn++){}
          slide[vtn].classList.add('active')
    }

}

},false)


