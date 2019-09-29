/*
 * Controlador
 */
var Controlador = function (modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function (pregunta, respuestas) {
    this.modelo.agregarPregunta(pregunta, respuestas);
  },
  eliminarPregunta: function (id) {
    this.modelo.eliminarPregunta(id);
  },
  eliminarTodasLasPreguntas: function()
  {
    this.modelo.eliminarTodasLasPreguntas();
  },
  editarPregunta: function(id, nuevoTextoPregunta)
  {
    this.modelo.editarPregunta(id, nuevoTextoPregunta);
  },
  agregarVoto: function(nombrePregunta, respuestaSeleccionada)
  {
    this.modelo.agregarVoto(nombrePregunta, respuestaSeleccionada);
  }
};
