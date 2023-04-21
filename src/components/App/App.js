// import { API_URL, URL_COMICS } from "../../constants/api";
// import { getDataApi } from "../../utils/getDataApi";
import Comics from "../Comics";

import "./App.css";

class App {
  async render() {
    await Comics.render();
  }
}

// class App {
//   async render() {
//     const data = await getDataApi.getData(API_URL + URL_COMICS);
//     console.log(data);
//   }
// }

export default new App();
