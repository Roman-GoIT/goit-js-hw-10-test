import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

loader.classList.replace('loader', 'is-hidden');
error.classList.add('is-hidden');
catInfo.classList.add('is-hidden');

fetchBreeds()
  .then(data => {
    breedSelect.innerHTML = data
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');
  })
  .catch(showError);

breedSelect.addEventListener('change', onSelect);

function onSelect(evt) {
  loader.classList.replace('loader', 'is-hidden');
  breedSelect.classList.add('is-hidden');
  catInfo.classList.add('is-hidden');

  const breedId = evt.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(data => {
        loader.classList.replace('loader', 'is-hidden');
        breedSelect.classList.remove('is-hidden');
      const catData = data[0];
      const { url, breeds } = catData;
      const { name, description, temperament } = breeds[0];

      catInfo.innerHTML = `<img src="${url}" alt="${name}" width = '300' height= '200' />
     <h3>${name}</h3>
     <p>${description}</p>
     <h3>Temperament:</h3>
     <p>${temperament}</p>`;
     catInfo.classList.remove('is-hidden');
    })
    .catch(showError);
}

function showError(err) {
    breedSelect.classList.remove('is-hidden');
    loader.classList.replace('loader', 'is-hidden');
};