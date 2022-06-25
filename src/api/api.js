import axios from "axios";
import {
  getListMovieFailure,
  getListMovieFinish,
  getListMovieStart,
  getListMovieSuccess,
} from "../redux/reducers/listMovie";

const API = "https://api.themoviedb.org/3";

export const getGenres = async (setData) => {
  await axios
    .get(`${API}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res) => {
      setData(res.data.genres);
    })
    .catch((err) => {
      alert(err);
    });
};

export function getMovieList(dispatch, count) {
  return async () => {
    dispatch(getListMovieStart());
    await axios
      .get(
        `${API}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${count}`
      )
      .then((res) => {
        dispatch(getListMovieSuccess(res.data.results));
      })
      .catch((err) => {
        dispatch(getListMovieFailure(err));
      })
      .finally(() => {
        dispatch(getListMovieFinish());
      });
  };
}

export const getDetails = async (setData, setGenres, setCompanies, id) => {
  await axios
    .get(`${API}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res) => {
      setData(res.data);
      setGenres(res.data.genres);
      setCompanies(res.data.production_companies);
      document.title = res.data.title;
    })
    .catch((err) => {
      alert(err);
    });
};

export default API;
