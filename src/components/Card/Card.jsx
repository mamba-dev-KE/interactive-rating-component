import "./Card.scss";
import Ratings from "../Ratings/Ratings";
import star from "../../images/icon-star.svg";

import { cardVariants } from "./Animation";
import { motion } from "framer-motion";

import { toggleSubmit } from "../../app/reducer";
import Thanks from "../Thanks/Thanks";

const Card = ({ dispatch, rating, isSubmitted }) => {
  const handleSubmit = () => {
    dispatch(toggleSubmit());
  };
  if (!isSubmitted) {
    return (
      <motion.article
        className="rating-card center pointer"
        initial="hidden"
        animate="visible"
        transition="transition"
        whileHover="hover"
        variants={cardVariants}
      >
        <motion.img className="rating-card__icon" src={star} alt="star" />
        <motion.h1 className="rating-card__title">How did we do?</motion.h1>
        <motion.p className="rating-card__text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </motion.p>
        <Ratings dispatch={dispatch} rating={rating} />
        <motion.button
          className="rating-card__btn flex flex-center pointer"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </motion.button>
      </motion.article>
    );
  } else {
    return <Thanks dispatch={dispatch} rating={rating} />;
  }
};

export default Card;
