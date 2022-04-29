export const cardVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      stiffness: 50,
    },
  },
  hover: {
    scale: 1.02,
  },
};
