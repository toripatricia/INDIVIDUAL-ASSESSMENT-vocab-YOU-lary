import { getWords } from '../api/wordData';
import { showWords } from '../pages/words';
import domBuilder from '../pages/shared/domBuilder';
import navBar from '../pages/shared/navBar';
import navigationEvents from '../pages/events/navigationEvents';
import logoutButton from '../components/logoutButton';
import addWordButton from '../components/addWordButton';
import formEvents from '../pages/events/formEvents';

const startApp = (user) => {
  domBuilder(user);
  formEvents(user);
  navBar();
  addWordButton();
  logoutButton();
  navigationEvents(user);

  getWords(user.uid).then((words) => showWords(words));
};

export default startApp;
