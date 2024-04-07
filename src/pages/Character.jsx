import axios from "axios";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Character = () => {
  const [characterData, setCharacterData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { characterId } = useParams({});

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/comic/${characterId}`
        );
        // console.log(data);
        setCharacterData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacterData();
  }, [characterId]);
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
      <h1>Character</h1>
      {characterData && characterData.character && (
        <article key={characterData.character._id}>
          <h2>{characterData.character.name}</h2>
          <img
            src={`${characterData.character.thumbnail.path}.${characterData.character.thumbnail.extension}`}
            alt={characterData.character.name}
          />
          <p>{characterData.character.description}</p>
          <Link
            to={`/characters/${characterData.character.thumbnail.extension}`}
          >
            <p>{characterData.character.comics}</p>
          </Link>
        </article>
      )}
    </main>
  );
};
export default Character;
