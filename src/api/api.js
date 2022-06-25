import axios from "axios";

const API = "https://api.themoviedb.org/3";

export const getGenres = async (setData) => {
  await axios
    .get(`${API}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res) => {
      // console.log(res.data.genres);
      setData(res.data.genres);
    })
    .catch((err) => {
      alert(err);
    });
};

export const getList = async (setData, count) => {
  await axios
    .get(
      `${API}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${count}`
    )
    .then((res) => {
      // console.log(res.data.results);
      setData(res.data.results);
    })
    .catch((err) => {
      alert(err);
    });
};

export const getDetails = async (setData, setGenres, setCompanies, id) => {
  await axios
    .get(`${API}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res) => {
      // console.log(res.data);
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
