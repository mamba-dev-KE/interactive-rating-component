import { setRating } from "../../app/reducer";
import "./Ratings.scss";

const Ratings = ({ dispatch, rating }) => {
  const handleClick = (e) => {
    dispatch(setRating(e.target.value));
  };

  return (
    <div className="ratings flex">
      {[1, 2, 3, 4, 5].map((item) => (
        <button
          className={
            item === parseInt(rating)
              ? "ratings__item ratings__item--active  grid grid-center pointer"
              : "ratings__item grid grid-center pointer"
          }
          type="button"
          key={item}
          value={item}
          onClick={handleClick}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Ratings;
