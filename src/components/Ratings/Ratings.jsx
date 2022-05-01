import { setRating } from "../../app/reducer";
import "./Ratings.scss";
import { motion } from "framer-motion";
import { ratingsVariants, buttonVariants } from "./Animation";

const Ratings = ({ dispatch, rating }) => {
  const handleClick = (e) => {
    dispatch(setRating(e.target.value));
  };

  return (
    <motion.div
      className="ratings flex"
      initial="hidden"
      animate="visible"
      variants={ratingsVariants}
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <motion.button
          className={
            item === parseInt(rating)
              ? "ratings__item ratings__item--active  grid grid-center pointer"
              : "ratings__item grid grid-center pointer"
          }
          type="button"
          key={item}
          value={item}
          onClick={handleClick}
          variants={buttonVariants}
        >
          {item}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default Ratings;
