window.addEventListener('scroll',function(){
    let animacion=document.getElementById('prepa');
    let pos=animacion.getBoundingClientRect().top;
    console.log(pos);
    let tamañoP=window.innerHeight/1; //codigo para hacer animacion con css pero cuando vaya bajando 
                                      //el scroll se ejecutara la animacion

    if(pos < tamañoP){
        animacion.style.animation='desaparecer 2s linear'
    }
})
