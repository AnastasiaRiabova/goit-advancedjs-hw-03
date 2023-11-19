import SlimSelect from 'slim-select';
import 'slim-select/styles';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const selectRef = document.querySelector('.breed-select');
const catInfoRef = document.querySelector('.cat-info');
const loaderRef = document.querySelector('.loader');

const slimSelect = new SlimSelect({
  select: selectRef,
  settings: {
    placeholderText: 'Search breeds',
  },
});

const errorMessage = {
  title: 'Error',
  message: '❌ Oops! Something went wrong! Try reloading the page!',
  position: 'topRight',
  color: 'red',
};

const toggleLoader = hide => loaderRef.classList?.toggle('hide', hide);

async function handleBreedSelection() {
  try {
    const selectedBreedId = selectRef?.value;
    toggleLoader(false);
    const catData = await fetchCatByBreed(selectedBreedId);
    displayCatInfo(catData);
  } catch (error) {
    toggleLoader(true);
    catInfoRef.innerHTML = '';
    iziToast.show(errorMessage);
  } finally {
    toggleLoader(true);
  }
}

const displayCatInfo = catData => {
  const { name, description, temperament, origin } = catData[0]?.breeds[0];
  const catImg = catData[0].url;
  catInfoRef.innerHTML = `
    <div class="wrapper-cat">
      <img class="cat-img" src="${catImg}" alt="${name}"/>
      <div class="wrapper-info">
        <h2>${name}</h2>
        <p><b>Description:</b> ${description}</p>
        <p><b>Temperament:</b> ${temperament}</p>
        <p><b>Country:</b> ${origin}</p>
      </div>
    </div>
  `;
};

const initializeApp = async () => {
  try {
    toggleLoader(false);
    await fetchBreeds().then(breeds => {
      const data = breeds.map(({ id, name }) => ({ text: name, value: id }));
      slimSelect.setData([{ placeholder: true, text: '' }, ...data]);
    });
    selectRef.classList.remove('hide');
    selectRef.addEventListener('change', handleBreedSelection);
  } catch (error) {
    toggleLoader(true);
    iziToast.show(errorMessage);
  } finally {
    toggleLoader(true);
  }
};

initializeApp();
