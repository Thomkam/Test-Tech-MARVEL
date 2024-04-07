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
        console.log("===============", { comicId });
        const { data } = await axios.get(
          `http://localhost:3000/comic/${comicId}`
        );
        setComicData(data);
        console.log("===============>>>>>>>>>>", data);
        console.log("||||||||||||||||", comicData);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
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
      <div>
        <h1>comic</h1>
        <img src={`${comicData.result}`} alt="" />
      </div>
      {/*  <img
        className="comic-img"
        src={`${comicData.thumbnail.path}.${comicId.thumbnail.extension}`}
        alt={comicData.title}
      /> */}
      {comicData && comicData.comic && (
        <article key={comicData.comic._id}>
          <h2>{comicData.comic.title}</h2>
          <img
            src={`${comicData.comic.thumbnail.path}.${comicData.comic.thumbnail.extension}`}
            alt={comicData.comic.title}
          />
          <p>{comicData.comic.description}</p>
          <Link to={`/comics/${comicData.comic.thumbnail.extension}`}>
            <p>{comicData.comic.comics}</p>
          </Link>
        </article>
      )}
    </main>
  );
};
export default Comic;
