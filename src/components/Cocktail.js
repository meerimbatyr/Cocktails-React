import { Link } from "react-router-dom";

function Cocktail({ cocktail }) {
  const { idDrink: id, strDrink: name, strDrinkThumb: image } = cocktail;
  return (
    <Link to={`/singlecocktail/${id}`}>
      <div className="cocktail" key={id}>
        <img src={image} alt={name} />
        <div className="cocktail-footer">
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Cocktail;
