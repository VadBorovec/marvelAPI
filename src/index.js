import axios from "axios";
// import "regenerator-runtime/runtime";
import { API_URL, URL_COMICS } from "./constants/api";
// import { getDataApi } from "./utils/getDataApi";

export const API_KEY = "a5837db97d72016c81a7a776f4240db9";
const url = "https://gateway.marvel.com/v1/public/comics";

class GetDataApi {
  async getData(url) {
    try {
      const response = await axios.get(url, {
        params: {
          apikey: API_KEY,
          limit: 100,
        },
      });

      return response.data.data.results;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}

const getDataApi = new GetDataApi();

// !==============
// const data = getDataApi.getData(url);
// // повертає проміс бо console.log() виконуєтьс синхронно, а результат промісу повертається з асинхронної операції
// console.log(data);
// //  повертається резльтат промісу
// data.then((result) => console.log(result));
// !=============

// (async () => {
//   const data = await getDataApi.getData(url);
//   console.log(data);
// })();

(async () => {
  const data = await getDataApi.getData(API_URL + URL_COMICS);
  console.log(data);
})();

// !==============
// const url1 =
//   "https://gist.githubusercontent.com/VadBorovec/7383a26996c1e0111f84ce043a0775b5/raw/6744fc955f8fe42ced1709058af10c23ec66b489/guitarCatalog.json";

// axios
//   .get(url1)
//   .then((res) => console.log(res.data))
//   .catch((error) => console.log(error.message));

// !==============
// const API_KEY = "a5837db97d72016c81a7a776f4240db9";
// const API_URL = "https://gateway.marvel.com/v1/public/";

// const url = "https://gateway.marvel.com/v1/public/comics";

// axios
//   .get(url, {
//     params: {
//       apikey: API_KEY,
//     },
//   })
//   .then((res) => console.log(res.data.data.results))
//   .catch((error) => console.log(error.message));
// !==============
