import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">VocabYOUlary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#" id="all-words">All Words</a>
        <a class="nav-link" href="#" id="java-words">Javascript</a>
        <a class="nav-link" href="#" id="html-words">HTML</a>
        <a class="nav-link" href="#" id="css-words">CSS</a>
      </div>
    </div>
    <div id="add-word-button"></div>
    <div id="logout-button"></div>
  </div>
</nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
