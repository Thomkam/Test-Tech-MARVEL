import axios from "axios";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import "../assets/css/comics.css";
import { Link } from "react-router-dom";

const Comics = () => {
  const [comicsData, setComicsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComicsData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/comics");
        // console.log(data);
        setComicsData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComicsData();
  }, []);

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
      <h1>Comics</h1>
      <div className="comics-container">
        {comicsData.results.map((comic) => {
          return (
            <article className="container-comics" key={comic._id}>
              <Link to={`/comic/${comic._id}`}>
                <h2 className="comics-title">{comic.title}</h2>
                <img
                  className="comics-img"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />
                <p className="comics-desc">{comic.description}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Comics;
