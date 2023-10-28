const apiKey =
  'live_9u2U2WhLTt5I3rNkBRb0FUxiM9cLFBFNcMFuXEl0RrvD24AThOxyTLjm10auAXno';
const BASE_URL = 'https://api.thecatapi.com/v1/';

function fetchBreeds() {
  return fetch(`${BASE_URL}breeds?api_key=${apiKey}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}images/search?api_key=${apiKey}&breed_ids=${breedId}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export { fetchBreeds, fetchCatByBreed };


