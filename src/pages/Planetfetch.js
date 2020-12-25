import React from "react";
import { useParams, Link } from "react-router-dom";

export default function SinglePlanet() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [Planet, setPlanet] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getPlanet() {
      try {
        const response = await fetch(
          `https://assignment-machstatz.herokuapp.com/planeti=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strname: name,
            boolfavorite: favorite,
            strid: id
          } = data.drinks[0];
          
          const newPlanet = {
            name,
            favorite,
            id
          };
          setPlanet(newPlanet);
        } else {
          setPlanet(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getPlanet();
  }, [id]);
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!Planet) {
    return <h2 className="section-title">no planets to display</h2>;
  } else {
    const {
      name,
      id,
      favorite,
      
    } = Planet;
    return (
      <section className="section Planet-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          
          <div className="drink-info">
            <p>name : {name}</p>
            <p>id: {id}</p>
            <p>favorite: {favorite}</p>
            
          </div>
        </div>
      </section>
    );
  }
}