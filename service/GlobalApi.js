import axios from 'axios'

const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api/',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})

const CreateNewCv=(data)=>axiosClient.post('/user-cvs', data)

const GetUserCvs=(userEmail)=>axiosClient.get('/user-cvs?filters[userEmail][$eq]='+userEmail);

export default{
    CreateNewCv,
    GetUserCvs
}