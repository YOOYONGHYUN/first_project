import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetails(json.data.movie);
  };

  let nowUrl = window.location.pathname;

  useEffect(() => {
    getMovies();
  }, [nowUrl]);

  console.log(details);
  console.log(details.genres);
  return (
    <div>
      <h2>{details.title}</h2>
      <img src={details.medium_cover_image} alt={details.title} />
      <p>{details.description_full}</p>
      {/* <ul>
        {details.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul> */}
    </div>
  );
}
