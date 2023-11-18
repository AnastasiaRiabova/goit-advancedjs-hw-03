import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_9jASqqHKQAo6N4L1SRkdQs7vBig3Nkosdb023kpSlgipthLBgxAwBmN13lpWZI7W';

export const fetchBreeds = async () => {
  return await axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data);
};

export const fetchCatByBreed = async breedId => {
  return await axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
};
