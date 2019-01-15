import axios from 'axios';

export default {
    create: () => {
        return axios.get('/api/add')
    }
}