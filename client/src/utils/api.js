import axios from 'axios';

export default {
    findInBounds: (bounds) => {
        return axios.post('/api/findbounds', bounds)
    }
}