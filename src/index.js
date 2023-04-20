// import "regenerator-runtime/runtime";
import axios from "axios";

// import { API_URL, URL_COMICS } from "./constants/api";
// import { getDataApi } from "./utils/getDataApi";

// (async () => {
//   const data = await getDataApi.getData(API_URL + URL_COMICS);
//   console.log(data);
// })();

import { guitarCatalog } from "./catalog/guitar-catalog.json";

const url =
  "https://gist.githubusercontent.com/dev-pandaren/a3ad2d177d18402e609ec743676af809ec743676af80a/raw/3889c469f25c71ec11e628acdd12438742506504/guitar-catalog.json";

axios
  .get(guitarCatalog)
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
