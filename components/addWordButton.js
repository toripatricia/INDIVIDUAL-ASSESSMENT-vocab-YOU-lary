import addWordForm from '../pages/forms/addWordForm';

const addWordButton = () => {
  const domString = '<button id="add-button" id="add-word-btn">Add A Word</button>';
  document.querySelector('#add-word-button').innerHTML = (domString);
  document.querySelector('#add-button').addEventListener('click', addWordForm);
};

export default addWordButton;
