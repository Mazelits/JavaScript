function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");//Nombre ingresado pelicula
    filter = input.value.toUpperCase();//convertir en mayúscula nombre ingresado
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];//buscar en la columna 0 (nombre pelicula)
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {//buscar con indexOf
          tr[i].style.display = "";//mostrar si es verdadero
          } else {
          tr[i].style.display = "none";//ocultar si es falso
        }
      }       
    }
  }