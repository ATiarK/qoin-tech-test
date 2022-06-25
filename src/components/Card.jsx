export default function Card(item, navigate) {
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
