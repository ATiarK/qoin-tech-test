import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/reducers/counter";
import { getMovieList } from "../api/api";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Homepage() {
  document.title = "List of Movies";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listMovie = useSelector((state) => state.listMovie);
  const { count } = useSelector((state) => state.counter);
  const fetchData = getMovieList(dispatch, count);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <main className="">
      <Navbar title="Movie List" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 m-4 md:mx-10 md:my-8">
        {listMovie.listMovie.map((item) => Card(item, navigate))}
      </div>

      <div className="flex justify-center gap-4 my-4">
        {count > 1 && (
          <Button variant="solid" onClick={() => dispatch(decrement())}>
            Prev
          </Button>
        )}
        <div className="text-center text-blue-500 rounded-md border-2 border-blue-400 items-center">
          <h2 className="font-semibold px-5 py-2 h-10">{count}</h2>
        </div>
        <Button variant="solid" onClick={() => dispatch(increment())}>
          Next
        </Button>
      </div>
    </main>
  );
}
