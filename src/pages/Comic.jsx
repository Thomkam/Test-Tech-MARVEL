import axios from "axios";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Comic = () => {
  const [comicData, setComicData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { comicId } = useParams({});

  useEffect(() => {
    const fetchComicData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/comic/${comicId}`
        );
        // console.log(data);
        setComicData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComicData();
  }, [comicId]);
  /*   console.log(characterData);
   */
  return isLoading ? (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="##EC1D24"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  ) : (
    <main>
      <h1>Comic</h1>
      {comicData && comicData.comic && (
        <article key={comicData._id}>
          <h2>{comicData.name}</h2>
          <img
            src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
            alt={comicData.name}
          />
          <p>{comicData.description}</p>
          <Link to={`/comic/${comicData.thumbnail.extension}`}>
            <p>{comicData.character}</p>
          </Link>
        </article>
      )}
    </main>
  );
};
export default Comic;
