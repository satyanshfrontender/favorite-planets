import React from "react";
import PlanetList from "../components/PlanetList";
import Planet from "../components/PlanetList";
import SearchForm from "../components/SearchForm";
export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [Planet, setPlanet] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    async function getPlanet() {
      try {
        const response = await fetch(
          `https://assignment-machstatz.herokuapp.com/planets=${searchTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newPlanet = drinks.map(item => {
            const {
              id,
              strplanet,
              isfavorite
            } = item;

            return {
              id: id,
              name: strplanet,
              favorite: isfavorite,
            };
          });
          setPlanet(newPlanet);
        } else {
          setPlanet([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    getPlanet();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <PlanetList Planet={Planet} loading={loading} />
    </main>
  );
}