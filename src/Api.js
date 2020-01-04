// usado para criar o localhost
import axios from "axios";

//Propriedade que define o url localhost.
//A PORTA 3001 esta sendo passada no json server
const api = axios.create({
  baseURL: "http://localhost:3001/"
});

//Pega o genres(Categorias) no banco
export const loadGenres = () => api.get("genres");

// Buscando series relacionado a categoria no banco
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)

// Pega as informações passada pelo newSeries e salva no banco em 'series'
export const saveSeries = (newSeries) => api.post('series', newSeries)


const apis = {
  loadGenres: loadGenres,
  saveSeries: saveSeries,
  loadSeriesByGenre: loadSeriesByGenre
};

// exportando para a utilizacao
export default apis;
