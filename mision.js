
 let usuario="Pruebafront@coex.com"
 let contraseña="BigMind"
 
 let ingresar=document.getElementById("ingresar")
 ingresar.addEventListener('click',iniciosesion)
 function iniciosesion(){
    let intentousuario=document.getElementById("validar").value
    let contraseñaintento=document.getElementById("contraseña").value
    if (intentousuario.length<6 || contraseñaintento<6 ){
       alert("los campos deben ser mayor a 6 caracteres")
    }
    if(intentousuario==usuario &&  contraseñaintento==contraseña){
       window.location.href="productos.html"
    }

   
 
     
 }

 

 