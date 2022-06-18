document.addEventListener('DOMContentLoaded',function(){
    var nut1=document.querySelector('.nut1')
    var toi= document.querySelectorAll('.toi')
    var sang= document.querySelectorAll('.sang')
    var bodys=document.querySelector('body')
    var thea=document.getElementsByTagName('a')
    var logo1 =document.querySelectorAll('.logoheader1')
    var logo2 =document.querySelectorAll('.logoheader2')
    var menu2=document.querySelector('.menu2 .layer2')
    var layer2menu2=document.querySelector(' .menu2 .layer2')
    var layer2menu=document.querySelector(' .menu .layer2')
    var weather=document.querySelector('.ct7 ._2')
    var ct7=document.querySelector('.ct7 ')
    var ndhr=document.querySelectorAll('.ct7 .nd11')
    var user =document.querySelector('.user')
    var out =document.querySelector('.out')
    var nhay=document.querySelector('.nhay')
    var layer32= document.querySelectorAll('.layert') 
    var layer3= document.querySelector('.layer32') 
    var layer3nd= document.querySelector('.layer32 .nd') 
    var thongbao= document.querySelector('.thongbao')
    var layer34=document.querySelector('.layer34')
    var top1=document.querySelector('.top1')
    var nhayy= setInterval(function(){
        nhay.classList.toggle('an')
    },500)
    nut1.onclick=function(){
    menu2.classList.toggle('active');
    }
    out.onclick=function(){
        layer3.classList.remove('hien2')
    }
    user.onclick=function(){
        layer3.classList.add('hien2')
 
    }
    for(m=0;m<sang.length;m++){
        toi[m].onclick=function(){
            for(u=0;u<logo1.length;u++){
            logo1[u].classList.add('hien6')}
            for(o=0;o<logo2.length;o++){
            logo2[o].classList.remove('hien6')}
            for(n=0;n<toi.length;n++){
                toi[n].classList.add('cam')
                sang[n].classList.remove('cam')
            }
          
            bodys.classList.add('toi1')
            layer2menu2.classList.add('toi1')
            layer2menu.classList.add('toi1')
            for(i=0;i<thea.length;i++){
                thea[i].classList.add('mautrang')
            }
            for(g=0;g<layer32.length;g++){
                layer32[g].classList.add('toi1')
            }
           layer3nd.classList.add('toi1')
           layer34.classList.add('toi1')
           top1.classList.add('toi1')
         }
    }
    
    for(l=0;l<sang.length;l++){
    sang[l].onclick=function(){
        layer34.classList.remove('toi1')
        top1.classList.remove('toi1')
        for(u=0;u<logo1.length;u++){
            logo1[u].classList.remove('hien6')}
            for(o=0;o<logo2.length;o++){
            logo2[o].classList.add('hien6')}
        for(g=0;g<layer32.length;g++){
            layer32[g].classList.remove('toi1')
        }
        for(n=0;n<toi.length;n++){
            sang[n].classList.add('cam')
            toi[n].classList.remove('cam')
        }
       bodys.classList.remove('toi1')
       layer2menu2.classList.remove('toi1')
       for(i=0;i<thea.length;i++){
           thea[i].classList.remove('mautrang')
       }
       layer3nd.classList.remove('toi1')

     
    
    }}
    
    var vtct7=ct7.offsetTop
    
    window.addEventListener('scroll',function(){

 
        if(window.pageYOffset>vtct7-100){
            weather.classList.add('fix')
        }
        
        if(window.pageYOffset<vtct7){
            weather.classList.remove('fix')
        }
        for(g=0;g<ndhr.length;g++){
            var vtndhr=ndhr[g].offsetTop
            if(window.pageYOffset>vtndhr-600){
                ndhr[g].classList.add('hienra')
            }
            
        }
       
    })
    thongbao.onclick=function(){
        layer34.classList.toggle('hien2')
    }
    console.log(logo1)
},false)