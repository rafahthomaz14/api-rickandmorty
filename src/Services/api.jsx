import axios from 'axios'
// https://rickandmortyapi.com/api/character/

const api = axios.create(()=>{
    baseURL = 'https://rickandmortyapi.com/api/character/'
})

export default api