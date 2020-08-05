window.addEventListener('scroll',function(){
    let animacion=document.getElementById('animado');
    let pos=animacion.getBoundingClientRect().top;
    console.log(pos);
    let tamañoP=window.innerHeight/3; //codigo para hacer animacion con css pero cuando vaya bajando 
                                      //el scroll se ejecutara la animacion

    if(pos < tamañoP){
        animacion.style.animation='ejemplo 1s ease-out'
    }
})