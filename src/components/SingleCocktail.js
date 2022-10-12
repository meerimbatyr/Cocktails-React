import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegCheckSquare } from "react-icons/fa";
import Loader from "./Loader";

const SingleCocktail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState();

  const fetchById = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https:/www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();

      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strInstructions: instr,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const list = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          instr,
          list,
        };
        setCocktail(newCocktail);
        //   console.log(newCocktail);
      } else {
        setCocktail([]);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  useEffect(() => {
    fetchById();
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  if (!cocktail) {
    return <h2 className="title">no cocktail to display</h2>;
  }

  return (
    <section className="single-drink">
      <img src={cocktail.image} alt={cocktail.name} className="drink-img" />
      <article className="drink-info">
        <h2>{cocktail.name}</h2>
        <p>{cocktail.instr}</p>
        <ul className="drink-ingredients">
          {cocktail.list.map((item) => {
            return item ? (
              <li>
                <FaRegCheckSquare className="far" />
                {item}
              </li>
            ) : null;
          })}
        </ul>

        <button className="btn" onClick={() => navigate(-1)}>
          All cocktails
        </button>
      </article>
    </section>
  );
};

export default SingleCocktail;
