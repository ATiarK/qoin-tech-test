import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getList } from "../api/api";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function Homepage() {
  document.title = "List of Movies";
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getList(setData, page);
  }, [page]);

  return (
    <main className="">
      <Navbar title="Movie List" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 m-4 md:mx-10 md:my-8">
        {data.map((item) => Card(item, navigate))}
      </div>

      <div className="flex justify-center gap-4 my-4">
        {page > 1 && (
          <Button variant="solid" onClick={() => setPage(page - 1)}>
            Prev
          </Button>
        )}
        <div className="text-center text-blue-500 rounded-md border-2 border-blue-400 items-center">
          <h2 className="font-semibold px-5 py-2 h-10">{page}</h2>
        </div>
        <Button variant="solid" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </main>
  );
}

function Card(item, navigate) {
  return (
    <div
      key={item.id}
      className="flex flex-col justify-around space-y-3"
      onClick={() => navigate(`/details/${item.id}`)}
    >
      <img
        className="h-96 w-full rounded-lg"
        src={
          item.poster_path
            ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            : "https://via.placeholder.com/500x750/?text=No+Image"
        }
        alt="poster"
      />
      <div className="text-center text-white rounded-md bg-blue-400 items-center">
        <h2 className="font-semibold p-2 h-10">{item.title}</h2>
      </div>
    </div>
  );
}
