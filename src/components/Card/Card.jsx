import "./Card.scss";
import Ratings from "../Ratings/Ratings";
import star from "../../images/icon-star.svg";
import { cardVariants } from "./Animation";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.article
      className="rating-card center pointer"
      initial="hidden"
      animate="visible"
      transition="transition"
      whileHover="hover"
      variants={cardVariants}
    >
      <img className="rating-card__icon" src={star} alt="star" />
      <h1 className="rating-card__title">How did we do?</h1>
      <p className="rating-card__text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Ratings />
      <button className="rating-card__btn flex flex-center pointer">
        Submit
      </button>
    </motion.article>
  );
};

export default Card;
