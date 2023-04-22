import { ROOT_INDEX } from "../../constants/root";

import classes from "./Error.css";

class Error {
  render() {
    const htmlWrapper = `
      <div class="${classes.error__container}">
        <span>
          <p class="${classes.error__alert}">An error has occurred.</p>
          <p class="${classes.error__alert}">Please try again later</p>
        </span>
      </div>
    `;

    ROOT_INDEX.innerHTML = htmlWrapper;
  }
}

export default new Error();
