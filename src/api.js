import axios from 'axios';
 
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/laravelapi/laravelapi/public/index.php',
    withCredentials: true,
});
 
export default apiClient;