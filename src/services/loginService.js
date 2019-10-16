import Axios from 'axios';

const baseUrl = '/api/login';

const login = async (credentials) => {
    const response = await Axios.post(baseUrl, credentials);
    return response.data;
}

const logout = (setUser) => {
    window.localStorage.removeItem('loggedUser');
    setUser(null);
}

export default {
    login,
    logout
}