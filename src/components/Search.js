import React, { useContext } from "react";
import { GlobalContext } from "./Context";

function Search() {
  const { search, searchValue } = useContext(GlobalContext);
  return (
    <>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search your favorite cocktail"
          value={searchValue}
          onChange={(e) => search(e.target.value)}
        />
      </form>
    </>
  );
}

export default Search;
