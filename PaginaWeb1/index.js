window.addEventListener('scroll',function(){
    let animacion=document.getElementById('animado');
    let pos=animacion.getBoundingClientRect().top;
    console.log(pos);
    let tamañoP=window.innerHeight/2; //codigo para hacer animacion con css pero cuando vaya bajando 
                                      //el scroll se ejecutara la animacion

    if(pos < tamañoP){
        animacion.style.animation='ejemplo 2s ease-out'
    }
})

window.addEventListener('scroll',function(){
    let animacion=document.getElementById('img-31');
    let pos=animacion.getBoundingClientRect().top;
    console.log(pos);
    let tamañoP=window.innerHeight/1; //codigo para hacer animacion con css pero cuando vaya bajando 
                                      //el scroll se ejecutara la animacion

    if(pos < tamañoP){
        animacion.style.animation='img 3s ease-out'
    }
})
window.addEventListener('scroll',function(){
    let animacion=document.getElementById('img-32');
    let pos=animacion.getBoundingClientRect().top;
    console.log(pos);
    let tamañoP=window.innerHeight/1; //codigo para hacer animacion con css pero cuando vaya bajando 
                                      //el scroll se ejecutara la animacion

    if(pos < tamañoP){
        animacion.style.animation='img2 3s ease-out'
    }
})
window.addEventListener('scroll',function(){
    let animacion=document.getElementById('perro-husky');
    let pos=animacion.getBoundingClientRect().top;
    console.log(pos);
    let tamañoP=window.innerHeight/1; //codigo para hacer animacion con css pero cuando vaya bajando 
                                      //el scroll se ejecutara la animacion

    if(pos < tamañoP){
        animacion.style.animation='desaparecer 2s linear'
    }
})

