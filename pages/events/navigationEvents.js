import { showWords } from '../words';
import { getWords } from '../../api/wordData';
import { signOut } from '../../utils/auth';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-words').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
    console.warn('CLICKED ALL WORDS');
  });
};

// TO DO - CREATE FILTERS

export default navigationEvents;
