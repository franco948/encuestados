/*
 * Modelo
 */
var Modelo = function () {
  // this.preguntas = [];
  this.preguntas = JSON.parse(localStorage.getItem('preguntas'));
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.preguntaEliminada = new Evento(this);
  this.preguntaEditada = new Evento(this);
  this.preguntaVotada = new Evento(this);
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
    this.guardar();    
    this.preguntaEliminada.notificar();
  },

  eliminarTodasLasPreguntas: function()
  {
    this.preguntas = [];
    this.guardar();
    this.preguntaEliminada.notificar();
  },

  agregarVoto: function(nombrePregunta, respuestaSeleccionada)
  {
    var preguntaAResponder = this.preguntas.find(pregunta => pregunta.textoPregunta === nombrePregunta);
    var respuestaElegida = preguntaAResponder.cantidadPorRespuesta.find(respuesta => respuesta.textoRespuesta === respuestaSeleccionada); 
    respuestaElegida.cantidad +=1;     
    this.guardar();
    this.preguntaVotada.notificar();
  },

  editarPregunta: function(id, nuevoTextoPregunta)
  {
    var preguntaAEditar = this.buscarPregunta(id);
    preguntaAEditar.textoPregunta = nuevoTextoPregunta;
    this.guardar();
    this.preguntaEditada.notificar();
  },

  buscarPregunta: function(id)
  {
    return this.preguntas.find(pregunta => pregunta.id === id);
  },

  //se guardan las preguntas
  guardar: function () {
    localStorage.setItem('preguntas', JSON.stringify(this.preguntas));
  },
};
