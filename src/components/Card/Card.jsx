import "./Card.scss";
import { Ratings, Thanks } from "../../components";
import { cardVariants, cardImageVariants, errorVariants } from "./Animation";
import star from "../../images/icon-star.svg";
import { toggleSubmit, error } from "../../app/reducer";
import { motion } from "framer-motion";

const Card = ({ dispatch, rating, isSubmitted, isError }) => {
  const handleSubmit = () => {
    rating === null ? dispatch(error()) : dispatch(toggleSubmit());
  };
  if (!isSubmitted) {
    return (
      <>
        <motion.article
          className="rating-card center pointer"
          initial="hidden"
          animate="visible"
          transition="transition"
          whileHover="hover"
          variants={cardVariants}
        >
          <motion.img
            className="rating-card__icon"
            src={star}
            alt="star"
            variants={cardImageVariants}
          />
          <motion.h1
            className="rating-card__title"
            variants={cardImageVariants}
          >
            How did we do?
          </motion.h1>
          <motion.p className="rating-card__text" variants={cardImageVariants}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </motion.p>
          <Ratings dispatch={dispatch} rating={rating} />
          <motion.button
            className="rating-card__btn flex flex-center pointer"
            type="submit"
            onClick={handleSubmit}
            variants={cardImageVariants}
          >
            Submit
          </motion.button>
          {isError && (
            <motion.span
              className="rating-card__error"
              variants={errorVariants}
            >
              Select rating before submitting...
            </motion.span>
          )}
        </motion.article>
      </>
    );
  } else {
    return <Thanks dispatch={dispatch} rating={rating} />;
  }
};

export default Card;
