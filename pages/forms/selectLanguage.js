import renderToDOM from '../../utils/renderToDom';
import { getLanguage } from '../../api/wordData';

const selectLanguage = (languageId) => {
  let domString = `<label for="author">Select an Language</label>
    <select class="form-control" id="selectLanguage" required>
    <option value="">Select a Langauge</option>`;

  // to do - figure out getLanguage function

  getLanguage().then((languageArray) => {
    console.warn(languageArray);
    languageArray.forEach((languages) => {
      console.warn(languages);
      domString += `
          <option 
            value="${languages.firebaseKey}"
            ${languageId === languages.firebaseKey ? 'selected' : ''}>
              ${languages.language}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#selectLanguage', domString);
  });
};

export default selectLanguage;
