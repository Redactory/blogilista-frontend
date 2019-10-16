import axios from 'axios'

const baseUrl = '/api/blogs'
let queryToken = null;

function setToken(token) {
  queryToken = `bearer ${token}`;
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createBlog = async (newBlog) => {
  const config = {
    headers: {Authorization: queryToken}
  };

  const request = axios.post(baseUrl, newBlog, config);
  return request.then(response => response.data);
}

export default { 
  getAll,
  setToken,
  createBlog
}