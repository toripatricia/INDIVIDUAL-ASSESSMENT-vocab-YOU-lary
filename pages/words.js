import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyWords = () => {
  const domString = '<h1>No words yet!</h1>';
  renderToDOM('#store', domString);
};

const showWords = (array) => {
  console.warn(array);
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div id= "word-card" class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.definition}</p>
            <p class="card-text bold">${item.language}</p>
            <hr>
            <i id="edit-word-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-word-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { emptyWords, showWords };
