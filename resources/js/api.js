import axios from "axios";
import router from "./router.js";


const api = axios.create()

//start request

api.interceptors.request.use(config => {

        if (localStorage.getItem('access_token')) {
            config.headers.setAuthorization(`Bearer ${localStorage.getItem('access_token')}`)
        }
        return config
    }
)

//end request

//start response

api.interceptors.response.use({},
    error => {

        if ('Token has expired' === error.response.data.message) {
            return axios.post('/api/auth/refresh', {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }).then(
                response => {
                    localStorage.setItem('access_token', response.data.access_token)
                    error.config.headers.setAuthorization(response.data.access_token)

                    return api.request(error.config)
                }
            )
        }
        if(error.response.status === 401){
            router.push({name: 'users.login'})
        }

    }
)
//end response

export default api
