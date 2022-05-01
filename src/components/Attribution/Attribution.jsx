import "./Attribution.scss";
import { techVariants } from "./Animation";
import { motion } from "framer-motion";

const Attribution = () => {
  return (
    <div className="attribution grid">
      <p className="attribution__designer">
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="attribution__link"
        >
          Designed By: Frontend Mentor
        </a>
      </p>
      <p className="attribution__programmer">
        <a
          href="https://github.com/mamba-dev-KE"
          target="_blank"
          rel="noreferrer"
          className="attribution__link"
        >
          Coded By: Joseph Maramba Weyao
          <motion.span
            initial="hidden"
            animate="visible"
            variants={techVariants}
            role="img"
            aria-label="tech"
            className="tech"
          >
            💻 🖥
          </motion.span>
        </a>
      </p>
    </div>
  );
};

export default Attribution;
