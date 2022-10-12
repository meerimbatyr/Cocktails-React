import React, { useEffect, useState } from "react";
import CocktailList from "./components/CocktailList";
import Search from "./components/Search";
import { GlobalContext } from "./components/Context";

const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const fetchCocktails = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      );
      const data = await res.json();
      setCocktails(data.drinks);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  const search = (value) => {
    setLoading(true);
    setSearchValue(value);

    //search by name fetching
    const fetchName = async () => {
      const res = await fetch(
        `https:/www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
      );
      const data = await res.json();
      console.log(data.drinks);
      setCocktails(data.drinks);
    };
    fetchName();

    setTimeout(() => {
      setLoading(false);
    }, 200);
  };
  return (
    <section className="section">
      <h1 className="title">Cocktails API</h1>
      <GlobalContext.Provider
        value={{ searchValue, search, cocktails, loading, setLoading }}
      >
        <Search />
        <CocktailList />
      </GlobalContext.Provider>
    </section>
  );
};

export default Home;
