import "./Card.scss";
import Ratings from "../Ratings/Ratings";
import star from "../../images/icon-star.svg";
import thanks from "../../images/illustration-thank-you.svg";
import {
  cardVariants,
  imageVariants,
  infoVariants,
  infoItemsVariants,
  restartIconVariants,
} from "./Animation";
import { motion } from "framer-motion";
import { BsArrowClockwise } from "react-icons/bs";
import { toggleSubmit } from "../../app/reducer";

const Card = ({ dispatch, rating, isSubmitted }) => {
  const handleSubmit = () => {
    dispatch(toggleSubmit());
  };
  return (
    <motion.article
      className="rating-card center pointer"
      initial="hidden"
      animate="visible"
      transition="transition"
      whileHover="hover"
      variants={cardVariants}
    >
      {!isSubmitted ? (
        <>
          <motion.img className="rating-card__icon" src={star} alt="star" />
          <motion.h1 className="rating-card__title">How did we do?</motion.h1>
          <motion.p className="rating-card__text">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </motion.p>
          <Ratings dispatch={dispatch} rating={rating} />
          <motion.button
            className="rating-card__btn flex flex-center pointer"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </motion.button>
        </>
      ) : (
        <motion.div className="rating-card__thanks">
          <motion.img
            variants={imageVariants}
            className="center"
            src={thanks}
            alt="star"
          />
          <motion.div className="rating-card__info" variants={infoVariants}>
            <motion.p
              className="rating-card__rating center"
              variants={infoItemsVariants}
            >
              You selected {rating} out of 5
            </motion.p>
            <motion.h1
              className="rating-card__title--thanks"
              variants={infoItemsVariants}
            >
              Thank you!
            </motion.h1>
            <motion.p
              className="rating-card__text"
              data-thanks="true"
              variants={infoItemsVariants}
            >
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </motion.p>
            <motion.div
              className="rating-card__restart grid"
              variants={restartIconVariants}
              onClick={handleSubmit}
            >
              <BsArrowClockwise />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.article>
  );
};

export default Card;
