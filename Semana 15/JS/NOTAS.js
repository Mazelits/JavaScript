function limpiar(){
    document.getElementById("Nota1").value="";
    document.getElementById("Nota2").value="";
    document.getElementById("Nota3").value="";
    document.getElementById("Definitiva").value="";
}
//Function para sacar definitiva
function promedio(){
    var n1=document.getElementById("Nota1").value;
    var n2=document.getElementById("Nota2").value;
    var n3=document.getElementById("Nota3").value;
    var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);
}