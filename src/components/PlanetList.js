import React from "react";
import Planet from "./Planet";
export default function PlanetList({ planets, loading }) {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (planets.length < 1) {
    return (
      <h2 className="section-title">
        no planets available
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">planets</h2>
      <div className="planets-center">
        {planets.map(item => {
          return <Planet key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}