import React, { useContext, useEffect, useState } from "react";
import Cocktail from "./Cocktail";
import Loader from "./Loader";
import { GlobalContext } from "./Context";

function CocktailList() {
  const { cocktails, loading } = useContext(GlobalContext);
  if (loading) {
    return <Loader />;
  }
  if (cocktails === null) {
    return (
      <div className="cocktails">
        <h2 className="title">Sorry, No Drinks Matched Your Search</h2>
      </div>
    );
  }
  return (
    <div className="section-center">
      {cocktails.map((cocktail) => (
        <Cocktail cocktail={cocktail} key={cocktail.idDrink} />
      ))}
    </div>
  );
}

export default CocktailList;
