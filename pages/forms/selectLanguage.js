import renderToDOM from '../../utils/renderToDom';
import { getLanguage } from '../../api/wordData';

const selectLanguage = (user, languageId) => {
  let domString = `<label for="author">Select an Language</label>
    <select class="form-control" id="selectLanguage" required>
    <option value="">Select a Langauge</option>`;

  // to do - figure out getLanguage function

  getLanguage(user.uid).then((languageArray) => {
    console.warn(languageArray);
    languageArray.forEach((word) => {
      console.warn(word);
      domString += `
          <option 
            value="${word.firebaseKey}"
            ${languageId === word.firebaseKey ? 'selected' : ''}>
              ${word.language}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#selectLanguage', domString);
  });
};

export default selectLanguage;
