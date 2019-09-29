/*
 * Modelo
 */
var Modelo = function () {
  this.preguntas = [];
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.preguntaEliminada = new Evento(this);
};

Modelo.prototype = {
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function () {
    var maxId = 0;

    this.preguntas.forEach(pregunta => {
      maxId = pregunta.id > maxId ? pregunta.id : maxId;
    });

    return maxId;
  },

  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function (nombre, respuestas) {
    var id = this.obtenerUltimoId();
    id++;
    var nuevaPregunta = { 'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas };
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  eliminarPregunta: function(id)
  {
    this.preguntas = this.preguntas.filter(pregunta => pregunta.id !== id);
    this.preguntaEliminada.notificar();
  },

  eliminarTodasLasPreguntas: function()
  {
    this.preguntas = [];
    this.preguntaEliminada.notificar();
  },

  // votarPregunta: function(id, textoRespuesta)
  // {
  //   var preguntaAResponder = this.buscarPregunta(id);
  //   var respuestaElegida = preguntaAResponder.respuestas.find(respuesta => respuesta.textoRespuesta === textoRespuesta); 
  //   respuestaElegida.cantidad +=1;     
  // },

  // editarPregunta: function(id, nuevoTextoPregunta)
  // {
  //   var preguntaAEditar = this.buscarPregunta(id);
  //   preguntaAEditar.textoPregunta = nuevoTextoPregunta;
  // },

  // buscarPregunta: function(id)
  // {
  //   return this.preguntas.find(pregunta => pregunta.id === idPregunta);
  // },

  //se guardan las preguntas
  guardar: function () {
  },
};
