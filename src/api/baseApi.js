const api = {}

const handleResponse = (response) => {
  if (!response.ok) {
    throw response;
  } else {
    return Promise.resolve(response);
  }
}

// Get details of all the houses of Game of Thrones
api.getHouses = () => {
  const pageCount = 1;
  const pageSize = 50;
  const fetchUrl = `https://www.anapioficeandfire.com/api/houses?page=${pageCount}&pageSize=${pageSize}`;
  return fetch(fetchUrl, {
    method: 'GET'
  })
    .then(handleResponse)
    .then(res => res.json())
}

// Get details of the selected house of Game of Thrones
api.getHouse = (path) => {
  const fetchUrl = `https://www.anapioficeandfire.com/api/${path}`;
  return fetch(fetchUrl, {
    method: 'GET'
  })
    .then(handleResponse)
    .then(res => res.json())
}

export default api
