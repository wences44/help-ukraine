import React from "react";
import Country from "./Country";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CountryList = () => {
  const { countriess, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (countriess.length < 1) {
    return (
      <h2 className="section-title">
        No countries matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h3 className="section-title">countries</h3>
      <h5 className="nav-center">Click in a country to display information page links:</h5>
      <br></br>
      <div className="countries-center">
     
        {countriess.map((item) => {
          return <Country key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CountryList;
