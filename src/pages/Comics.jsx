import axios from "axios";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import "../assets/css/comics.css";

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
        {comicsData.results.map((comics) => {
          return (
            <article className="container" key={comics._id}>
              <h2>{comics.name}</h2>
              <img
                src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                alt={comics.title}
              />
              <p>{comics.description}</p>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default Comics;
