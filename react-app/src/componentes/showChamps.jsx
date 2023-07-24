import { useState, useEffect } from 'react';
import DivChamp from './DivChamp';

function ShowChamp() {
  const [champList, setChampList] = useState([]);
  const [nameChamp, setNameChamp] = useState("");
  const [filteredChampList, setFilteredChampList] = useState([]);
  const [randomChamp, setRandomChamp] = useState();
  const [randomIndex, setRandomIndex] = useState();
  const [areGenderDifferent, setAreGenderDifferent] = useState(false);
  const [areYearDifferent, setAreYearDifferent] = useState(false);
  const [arePositionDifferent, setArePositionDifferent] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/champions');
        const json = await response.json();
        setChampList(json);
        const index = Math.floor(Math.random() * json.length);
        setRandomIndex(index);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  const getHiddenChampion = () => {
    const randomChamp = champList[randomIndex];
    setRandomChamp(randomChamp);
    return randomChamp;
  };

  function changeColorProperties() {
    setAreGenderDifferent(randomChamp.gender !== filteredChampList[0]?.gender);
    setAreYearDifferent(randomChamp.release !== filteredChampList[0]?.release);
    setArePositionDifferent(randomChamp.position !== filteredChampList[0]?.position);
  }

  const gaming = () => {
    const result = getHiddenChampion();
    changeColorProperties();
    if (result.name === nameChamp) {
      alert("Ganaste!");
      location.reload();
    }
  }

  // setear nombre de champ from input
  const handleInputChange = (event) => {
    setNameChamp(event.target.value);
  };

  // tomar nombre del input page
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Valor ingresado:', nameChamp);
    getChamp();
  };

  // Filtrar campeon del array de objetos del fetch
  function filterChamp(arChamp, champ) {
    return arChamp.filter((x) => x.name === champ);
  }

  function getChamp() {
    const result = filterChamp(champList, nameChamp);
    if (result.length > 0) {
      setFilteredChampList([...filteredChampList, result[0]]);
      gaming()
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nameChamp} onChange={handleInputChange} />
        <button type="submit">Try it!</button>
      </form>
      <div>
        {filteredChampList.map((champion) => (
          <DivChamp
          className={`${
            areGenderDifferent ? 'age-same' : 'age-different'
          } ${
            areYearDifferent ? 'year-same' : 'year-different'
          } ${
            arePositionDifferent ? 'position-same' : 'position-different'
          }`}
          key={champion.id}
          champObject={champion}
        />
        ))}
      </div>
    </div>
  );
}

export default ShowChamp;