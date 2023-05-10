function apostar(){
    var a=Math.round(Math.random()*10);
    document.getElementById("resultado").value=a;
    var b=document.getElementById("apostado").value;
    //validar
    if (a==b){
        document.getElementById("salida").value="GANO SU APUESTA";
    } else{
        document.getElementById("salida").value="PERDIO SU APUESTA";
    }
}
function cancel(){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
}