import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../api/api";
import Navbar from "../components/Navbar";
import SimpleTable from "../components/Table";

export default function Details() {
  const params = useParams();
  const [data, setData] = useState({});
  const [genres, setGenres] = useState([]);
  const [companies, setCompanies] = useState([]);
  const id = params.id;

  useEffect(() => {
    getDetails(setData, setGenres, setCompanies, id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setData]);

  return (
    <main>
      <Navbar title="Details" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-10 my-5">
        <div className="bg-gray-200 p-4">
          <img
            className="h-full w-full rounded-lg"
            src={
              data.poster_path
                ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                : "https://via.placeholder.com/500x750/?text=No+Image"
            }
            alt="poster"
          />
        </div>
        <div className="bg-gray-200 py-4 px-4 md:px-6 col-span-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold">{data.title}</h2>
            {data.overview ? (
              <p className="ttext-gray-600 italic indent-10">
                "{data.overview}"
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="my-2 space-y-2">
            <SimpleTable label="Status" value={data.status} />
            <SimpleTable label="Release Date" value={data.release_date} />
            <SimpleTable
              label="Genres"
              value={genres.map((item) => item.name).join(", ")}
            />
            <SimpleTable
              label="Companies"
              value={companies.map((item) => item.name).join(", ")}
            />
            {data.homepage && (
              <div className="flex md:flex-row flex-col">
                <div className="basis-3/12 font-semibold">Homepage</div>
                <div className="hidden md:block basis-9/12">
                  <a href={data.homepage} target="_blank" rel="noreferrer">
                    : Link
                  </a>
                </div>
                <div className="md:hidden basis-9/12">
                  <a href={data.homepage} target="_blank" rel="noreferrer">
                    Link
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
