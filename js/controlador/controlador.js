/*
 * Controlador
 */
var Controlador = function (modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function (pregunta, respuestas) {
    if (pregunta && respuestas.length > 0)
    {
      this.modelo.agregarPregunta(pregunta, respuestas);
    }
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
    if (respuestaSeleccionada)
    {
      this.modelo.agregarVoto(nombrePregunta, respuestaSeleccionada);
    }    
  }
};
