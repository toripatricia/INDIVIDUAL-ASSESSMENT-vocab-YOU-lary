import { createWord, getWords, updateWord } from '../../api/wordData';
import { showWords } from '../words';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A Word
    if (e.target.id.includes('submit-word')) {
      console.warn('added word');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageId: document.querySelector('#selectLanguage').value,
        uid: user.uid,
      };

      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords(user.uid).then(showWords);
          console.warn('created word');
        });
      });
    }
  });
};

export default formEvents;
