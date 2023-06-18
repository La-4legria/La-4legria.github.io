function cargarContenido( tabId) {
  var i, tabContent, tabLinks;
  
  // Selecciona todos los elementos con la clase "tab-content" (es decir, los contenidos de las pestañas) y los guarda en la variable tabContent. Luego, se recorre cada elemento en tabContent y se establece su propiedad display en "none" para ocultarlo.
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  
  // Mostrar el contenido de la pestaña seleccionada y marcarla como activa
  document.getElementById(tabId).style.display = "block";
}