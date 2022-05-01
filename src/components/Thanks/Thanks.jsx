import "./Thanks.scss";
import {
  imageVariants,
  infoVariants,
  infoItemsVariants,
  restartIconVariants,
  submittedCardVariants,
} from "./Animation";
import thanks from "../../images/illustration-thank-you.svg";
import { BsArrowClockwise } from "react-icons/bs";
import { reset, toggleSubmit } from "../../app/reducer";
import { motion } from "framer-motion";

const Thanks = ({ dispatch, rating }) => {
  const handleSubmit = () => {
    dispatch(toggleSubmit());
    dispatch(reset());
  };
  return (
    <motion.article
      className="rating-card-thanks"
      variants={submittedCardVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        variants={imageVariants}
        className="rating-card-thanks__image center"
        src={thanks}
        alt=""
      />
      <motion.div className="rating-card-thanks__info" variants={infoVariants}>
        <motion.p
          className="rating-card-thanks__rating center"
          variants={infoItemsVariants}
        >
          You selected {rating} out of 5
        </motion.p>
        <motion.h1
          className="rating-card-thanks__title"
          variants={infoItemsVariants}
        >
          Thank you!
        </motion.h1>
        <motion.p
          className="rating-card-thanks__text"
          data-thanks="true"
          variants={infoItemsVariants}
        >
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </motion.p>
        <motion.div
          className="rating-card-thanks__restart pointer grid"
          variants={restartIconVariants}
          onClick={handleSubmit}
        >
          <BsArrowClockwise />
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

export default Thanks;
