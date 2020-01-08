// usado para criar o localhost
// import axios from "axios";

//Propriedade que define o url localhost.
// //A PORTA 3001 esta sendo passada no json server
// const api = axios.create({
//   baseURL: "http://localhost:3001/"
// });


const express = require('express');
const mongoose = require('mongoose');

const api = express();

mongoose.connect('mongodb+srv://bd_react:ZrvqIyBx7jWpszdR@cluster0-s4btv.mongodb.net/test?retryWrites=true&w=majority',{
  userNewUrlParse: true,
});




//Pega o genres(Categorias) no banco
export const loadGenres = () => api.get("genres");

// Buscando series relacionado a categoria no banco com metodo get
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)

// Pega as informações passada pelo newSeries e salva 
//no banco com metodo post, salva em 'series'
// export const saveSeries = (newSeries) => api.post('series', newSeries)

export const saveSeries = (newSeries) => api.post('series', function(req, res){
  res.send(newSeries)
})

// Update series
export const updateSeries = (series) => api.put('series/'+series.id, series)

//busca informacao no banco e apaga usando metodo delete
export const deleteSeries = (id) => api.delete("series/"+id)

//buscando dados para editar
export const loadSeriesById = (id) => api.get('series/'+id)


const apis = {
  loadGenres,
  saveSeries,
  updateSeries,
  loadSeriesByGenre,
  deleteSeries,
  loadSeriesById
};

// exportando para a utilizacao
export default apis;
