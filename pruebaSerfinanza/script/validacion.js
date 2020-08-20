function validacion(nombre, celular, email, pais){
   nombre = document.getElementById('nombre').value;
   celular = document.getElementById('celular').value;
   email = document.getElementById('email').value;
   pais = document.getElementById('pais').value;
  if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
    alert('El campo nombre debe ser diligenciado.');
    return false;
  }
  if (celular == null || celular.length == 0 || /^\s+$/.test(celular) ) {
    alert('El campo celular debe ser diligenciado.');
    return false;
  }
  if (email == null || email.length == 0 || /^\s+$/.test(email) ) {
    alert('El campo email debe ser diligenciado.');
    return false;
  }
  if ( pais == null || pais == 0){
    alert('El campo país debe ser diligenciado.');
    return false;
  }
  return true;
}
