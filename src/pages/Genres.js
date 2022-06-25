import { useState, useEffect } from "react";
import { getGenres } from "../api/api";
import Navbar from "../components/Navbar";

export default function Genres() {
  document.title = "List of Genres";
  const [data, setData] = useState([]);

  useEffect(() => {
    getGenres(setData);
  }, [setData]);

  return (
    <main className="text-center">
      <Navbar title="Genres" />
      <div className="grid grid-cols-4 gap-4 m-4 md:mx-10 md:my-5">
        {data.map((item) => (
          <div key={item.id} className="bg-gray-200 p-4">
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
