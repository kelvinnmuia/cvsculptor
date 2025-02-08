import axios from 'axios'

const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
/**
 * Axios client instance configured with base URL and headers.
 * 
 * @constant {AxiosInstance} axiosClient - The Axios client instance.
 * @property {string} baseURL - The base URL for the API.
 * @property {Object} headers - The headers for the API requests.
 * @property {string} headers.Content-Type - The content type of the request.
 * @property {string} headers.Authorization - The authorization token for the API.
 */
const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api/',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})

const CreateNewCv=(data)=>axiosClient.post('/user-cvs', data)

const GetUserCvs=(userEmail)=>axiosClient.get('/user-cvs?filters[userEmail][$eq]='+userEmail);

const UpdateCvDetail=(id,data)=>axiosClient.put('/user-cvs/'+id,data)

const GetCvById=(id)=>axiosClient.get('/user-cvs/'+id+"?populate=*")

export default{
    CreateNewCv,
    GetUserCvs,
    UpdateCvDetail,
    GetCvById
}